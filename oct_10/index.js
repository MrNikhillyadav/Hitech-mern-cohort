const express = require('express')
const mongoose = require('mongoose');
const { TodoModel } = require('./model');
const cors = require('cors');

const app = express()

app.use(cors());
app.use(express.json())

mongoose.connect(MONGODB_URL)
.then(()=> {
  console.log("db connected")
})
.catch((e) => {
  console.log("error connecting to database")
})


// signup route
app.post('/signup', async(req,res) => {
  const email = req.body.email;
  const password = req.body.password;

    const user = await UserModel.create({
      email,
      password,
    })

  res.json({
    message : "signed up"
  })
})

// signin route
app.post('/signin', async(req,res) => {
  const email = req.body.email;
  const password = req.body.password;

  try{
      const user = await UserModel.findOne({
        email : email,
        password:password
      })
      
      if(!user){
        res.json({
            response : "user not found"
        })
        return;
    }

      res.json({
        message : "signed in",
    })
  }
  catch(e){

    res.json({
      error : "wrong credentials"
    }) 
  }
})

app.post('/todo', async(req, res) => {
  const title = req.body.title;
  const done = req.body.done;

  const todo = await TodoModel.create({
    title : title,
    done : done
  })

  res.json({
    message : "todo added"
  })
})

app.get('/todo', async(req, res) => {

  const todos = await TodoModel.find()

  res.json({
    todos : todos
  })
})

app.delete('/todo/:id', async(req, res) => {

  const todoId = req.params.id;
  const todo = await TodoModel.deleteOne({
    _id : todoId
  }) 

  res.json({
    message :"todo is deleted"
  })
})

app.put('/todo/:id', async(req, res) => {
  const todoId = req.params.id;

  const title = req.body.title;
  const done = req.body.done;
  
  const todo = await TodoModel.findByIdAndUpdate( todoId,
        {
          title : title,
          done : done
        }
      ) 

  res.json({
    message :"todo is deleted"
  })
})


app.listen(3000, () => {
  console.log(`Example app listening on port 3000`)
})
