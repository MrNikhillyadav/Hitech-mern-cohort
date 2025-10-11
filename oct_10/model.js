const mongoose = require("mongoose");

const user = new mongoose.Schema({
    email : String,
    password : String
})

const todo = new mongoose.Schema({
    title : String,
    done : Boolean
})

const UserModel = mongoose.model("User",user);
const TodoModel = mongoose.model("Todo",todo);

module.exports = {
    UserModel,
    TodoModel
}