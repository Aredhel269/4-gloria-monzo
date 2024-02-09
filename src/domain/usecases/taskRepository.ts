import { Task } from '../entities/task'

export interface TaskRepository {
    createTask (task: Task): Task
    completeTask (id: string): void
    deleteTask (id: string): void
    listTask (): Task[]
    findIndexById(id: string): number;
    updateList (task: Task): Task
    getTaskById(id: string): Task | undefined;
}