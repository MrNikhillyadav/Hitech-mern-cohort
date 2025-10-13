const express = require('express')
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');
const { TodoModel, UserModel } = require('./model');

const app = express();

app.use(cors());
app.use(express.json())

mongoose.connect("mongodb+srv://test:test@cluster0.ervzhxa.mongodb.net/todo-app3")
.then(() => console.log("db connected"))
.catch((e) => console.log("error in connecting to db"))

app.post('/signup', async(req,res) => {
    const email = req.body.email;
    const password = req.body.password;
    // logic to hash the password
    const hashedPassword = await bcrypt.hash(password,5)

    await UserModel.create({
        email : email,
        password : hashedPassword
    })

    res.json({
        response : "signed up successful"
    })
})

app.post('/signin', async(req,res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email : email,
    })

    if(!user){
        res.json({
            response : "user not found"
        })
        return;
    }

    //compare plain password with hashed password
    const matchPassword = await bcrypt.compare(password,user.password);

    if(!matchPassword){
        res.json({
            response : "wrong crendential/password"
        })
        return;
    }

    res.json({
        response : "signed in successful"
    })
})


app.get('/todo',async(req,res) => {

    const todos = await TodoModel.find()

    res.json({
        response : todos
    })
})

app.post('/todo',async(req,res) => {
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        title : title,
        done : done
    })

    res.json({
        response : "todo added"
    })
})

app.put('/todo/:id',async(req,res) => {
    const todoId = req.params.id;

    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.findByIdAndUpdate(todoId,{
        title : title,
        done : done
    })

    res.json({
        response : "todo updated"
    })
})

app.delete('/todo/:id',async(req,res) => {
    const todoId = req.params.id;

    await TodoModel.findByIdAndDelete(todoId);

    res.json({
        response : "todo deleted"
    })
})

app.listen(3000,() => {
    console.log("server is running on port 3000")
})

