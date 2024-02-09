import { Task } from '../domain/entities/task'; 
import { TaskRepository } from '../domain/usecases/taskRepository'; 

// Classe encarregada d'editar una task
export class PutTaskUsecase {
    constructor(private taskRepository: TaskRepository) {
        this.taskRepository = taskRepository; // Inicialitzem el repositori de tasques
    }

    // Mètode per editar una task amb una ID específica
    execute(taskId: string, updatedTask: Task): Task {
        const taskIndex = this.taskRepository.findIndexById(taskId); // Busquem l'índex de la task a editar
        if (taskIndex !== -1) { // Si s'ha trobat la task
            updatedTask.id = taskId; // Assegurem que els dos ID siguin els mateixos
            const updatedTaskResult = this.taskRepository.updateList(updatedTask); // Actualitzem la task al repositori
            return updatedTaskResult; // Retornem la task actualitzada
        } else {
            throw new Error(`Task with id ${taskId} not found`); 
        }
    }
}
