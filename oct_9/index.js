const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors());

//localhost:3000/
app.get('/', (req, res) => {

  res.json({
    message :"server is healthy"
  })
})

//localhost:3000/todo
app.post('/todo', (req, res) => {
      // logic for posting todo....

  res.json({
    message :"todo added"
  })

})

//localhost:3000/todo
app.get('/todo', (req, res) => {
    // logic for fetching todo....

  res.json({
    message :"todo is recieved"
  })

})

app.delete('/todo', (req, res) => {

  res.json({
    message :"todo is deleted"
  })
})

app.put('/todo', (req, res) => {

  res.json({
    message :"todo is deleted"
  })
})


app.listen(3000, () => {
  console.log(`Example app listening on port 3000`)
})
