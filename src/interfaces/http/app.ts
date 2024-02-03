import express from 'express';
import { routerTodo } from '../controllers/todoControllers';

const app = express();

app.use(express.json());
app.use('/api/tasks', routerTodo);

export default app;