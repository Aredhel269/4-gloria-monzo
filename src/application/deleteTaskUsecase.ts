import { Task } from "../domain/entities/task"; 
import { TaskRepository } from "../domain/usecases/taskRepository"; 

export class DeleteTaskUsecase {
    constructor(private taskRepository: TaskRepository) {} // Al constructor li passem una instància de TaskRepository

    // Mètode per eliminar una task a partir de la seva ID
    execute(taskId: string): string {
        // Cerquem la task amb la ID donada
        const taskIndex = this.taskRepository.findIndexById(taskId);  

        // Si trobem la tasca, l'eliminem
        if (taskIndex !== -1) {
            this.taskRepository.deleteTask(taskId); // Fem servir el mètode deleteTask de TaskRepository
            return `Task with id ${taskId} has been successfully deleted.`; 
        } else {
            throw new Error(`Task with id ${taskId} not found`);
        }
    }
}
