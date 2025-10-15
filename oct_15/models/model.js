const mongoose = require('mongoose')

// 1. create schema
const TodoSchema = new mongoose.Schema({
    title : String,
    done : Boolean
})

const UserSchema = new mongoose.Schema({
    email : String,
    password : String
})

// 2. create model
const TodoModel = mongoose.model('todo',TodoSchema)
const UserModel = mongoose.model('user',UserSchema)

module.exports = {
    TodoModel,
    UserModel
}