import express from "express";
import {
    createTodo,
    getTodo
} from "../controllers/todo_controller";


const router = express.Router();

// what is dynamic routing ? 

router.post('/', createTodo);
router.get('/', getTodo);
router.get('/:id', updateTodo);
router.delete("/:id", deleteTodo);

export default router;