import express from 'express';
import taskController from './taskControllers';

export const routerTodo = express.Router();

routerTodo.post('/', taskController.createTask);
routerTodo.get('/', taskController.getTasks);
routerTodo.put('/:id', taskController.putTask);
routerTodo.delete('/:id', taskController.deleteTask);
