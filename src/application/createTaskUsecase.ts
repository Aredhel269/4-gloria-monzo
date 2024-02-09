import { Task } from "../domain/entities/task";
import { TaskRepository } from "../domain/usecases/taskRepository";

// Definim una interfície que especifica el format de les dades d'entrada per a la creació d'una task
interface CreateTaskInput {
    description: string;
    completed: boolean;   
}

// Implementem la lògica per a la creació d'una nova task
export class CreateTaskUsecase {
    private taskRepository: TaskRepository; // Repositori de tasques necessari per interactuar amb la persistència de dades

    constructor(taskRepository: TaskRepository) {
        this.taskRepository = taskRepository; // Inicialitzem el repositori de tasques amb el valor rebut com a paràmetre
    }

    execute(input: CreateTaskInput): Task {
        // Desestructurem l'objecte d'entrada per obtenir la descripció de la tasca
        const { description } = input;
        
        // Creem una nova instància de la classe Task amb la descripció donada
        const task = new Task(description);
        
        // Utilitzem el repositori de tasques per guardar la nova tasca
        this.taskRepository.createTask(task);
        
        return task;
    }
}
