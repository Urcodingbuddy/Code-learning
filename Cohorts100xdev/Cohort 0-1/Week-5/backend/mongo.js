const mongoose = require("mongoose")
const { string } = require("zod")
mongoose.connect('mongodb+srv://anshpethe110:%40mangoanshpethe159@cluster0.702twr0.mongodb.net/todos')

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema)
module.exports = {
    todo
}
