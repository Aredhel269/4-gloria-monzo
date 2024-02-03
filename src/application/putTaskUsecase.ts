// putTaskUsecase.ts
import { Task } from '../domain/entities/task';
import { TaskRepository } from '../domain/usecases/taskRepository';

export class PutTaskUsecase {
    constructor(private taskRepository: TaskRepository) {}

    execute(taskId: number, updatedTask: Task): Task | undefined {
        const taskIndex = this.taskRepository.findIndexById(taskId);
        if (taskIndex !== -1) {
            updatedTask.id = taskId; // Assegurem que l'ID de la task actualitzada sigui el mateix que l'ID original
            this.taskRepository.updateList(updatedTask);
            return updatedTask;
        } else {
            throw new Error(`Task with id ${taskId} not found`);
        }
    }
}
