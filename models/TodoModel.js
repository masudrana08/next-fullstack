import mongoose from 'mongoose'

const TodoSchema = new mongoose.Schema({
    text:String
})

export const TodoModel = mongoose.models.Todo || mongoose.model('Todo', TodoSchema)