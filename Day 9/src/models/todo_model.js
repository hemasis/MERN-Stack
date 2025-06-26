import mongoose from "mongoose";
// creating a schema for the Todo model
// This schema defines the structure of the Todo documents in the MongoDB collection
// It includes fields for title, description, completed status, and timestamps
const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    completed: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

export const Todo = mongoose.model("Todo", todoSchema);