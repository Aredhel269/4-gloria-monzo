import { Task } from "../domain/entities/task";
import { TaskRepository } from "../domain/usecases/taskRepository";

export class DeleteTaskUsecase {
    constructor(private taskRepository: TaskRepository) {}

    execute(taskId: number): boolean {
        // Utilitzem el mètode findIndexById de taskRepository per obtenir la task amb l'ID proporcionat
        const taskIndex = this.taskRepository.findIndexById(taskId);  
        
        // Si taskIndex és diferent de -1, significa que s'ha trobat la tasca i es pot eliminar
        if (taskIndex !== -1) {
            this.taskRepository.deleteTask(taskId);
            return true; // Retornem true per indicar que la tasca s'ha eliminat amb èxit
        } else {
            // Si la tasca no existeix, llancem una excepció indicant que no s'ha trobat cap tasca amb l'ID proporcionat
            throw new Error(`Task with id ${taskId} not found`);
        }
    }
}
