import { Task } from '../domain/entities/task'; 
import { TaskRepository } from '../domain/usecases/taskRepository';

export class GetTaskUsecase {
    constructor(private taskRepository: TaskRepository) {} // Al constructor li passem una instància de TaskRepository

    // Mètode per obtenir una única task segons la seva ID
    getById(taskId: string): Task | undefined {
        return this.taskRepository.getTaskById(taskId); // Fem servir el mètode getTaskById de TaskRepository
    }

    // Mètode per obtenir totes les tasques del sistema
    executeGetAll(): Task[] {
        return this.taskRepository.listTask(); // Fem servir el mètode listTask de TaskRepository
    }
}
