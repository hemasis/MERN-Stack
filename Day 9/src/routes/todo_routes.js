import express from "express";
import { createTodo, deleteTodo, getTodo, getTodoById, updateTodo } from "../controllers/todo_controller.js";


const router = express.Router();

// what is dynamic routing ? 

router.post('/', createTodo);
router.get('/', getTodo);
router.get('/:id', getTodoById);    
router.put('/:id', updateTodo);
router.delete("/:id", deleteTodo);

export default router;