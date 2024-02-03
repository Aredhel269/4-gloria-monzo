import { Task } from '../entities/task'

export interface TaskRepository {
    createTask (task: Task): Task
    completeTask (id: number): void
    deleteTask (id: number): void
    listTask (): Task[]
}