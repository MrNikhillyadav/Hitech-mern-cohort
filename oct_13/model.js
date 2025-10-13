const mongoose = require("mongoose");

// Step 1 : Creating a schema
const todoSchema = new mongoose.Schema({
    title : String,
    done : Boolean
})

const userSchema = new mongoose.Schema({
    email : String,
    password : String
})

// Step 2 : Creating a model
const TodoModel = mongoose.model("Todo",todoSchema);
const UserModel = mongoose.model("User",userSchema);

// Step 3 : Exporting the model
module.exports = {
    TodoModel,
    UserModel
}