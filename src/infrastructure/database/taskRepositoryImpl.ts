import { Task } from "../../domain/entities/task";
import { TaskRepository } from "../../domain/usecases/taskRepository";

export class TaskRepositoryImpl implements TaskRepository {
    private tasks: Task[] = []; // Array per emmagatzemar les tasques

    // Mètode per crear una nova task
    createTask(task: Task): Task {
        this.tasks.push(task); // Afegim la task al final de l'array
        return task; // Retornem la task creada
    }

    // Mètode per marcar una task com a completa
    completeTask(id: string): void {
        const taskIndex = this.findIndexById(id); // Cerquem l'índex de la task amb l'ID proporcionada
        if (taskIndex !== -1) { // Si s'ha trobat la task
            this.tasks[taskIndex].completed = true; // la marquem com a completada
        } else {
            throw new Error(`Task with id ${id} not found`); 
        }
    }

    // Mètode per eliminar una task
    deleteTask(id: string): void {
        const taskIndex = this.findIndexById(id); // Cerquem l'índex de la task amb l'ID proporcionada
        if (taskIndex !== -1) { // Si s'ha trobat la task
            this.tasks.splice(taskIndex, 1); // l'eliminem de l'array
        } else {
            throw new Error(`Task with id ${id} not found`); 
        }
    }

    // Mètode per trobar l'índex d'una task segons la seva ID
    findIndexById(id: string): number {
        return this.tasks.findIndex(task => task.id === id); // Retorna l'índex de la task amb l'ID proporcionada
    }

    // Mètode per obtenir una task segons la seva ID
    getTaskById(id: string): Task | undefined {
        return this.tasks.find(task => task.id === id); // Retorna la task amb l'ID proporcionada, si s'ha trobat
    }

    // Mètode per actualitzar una task a la llista
    updateList(task: Task): Task {
        const index = this.findIndexById(task.id); // Cerquem l'índex de la task amb l'ID proporcionada
        if (index !== -1) { // Comprovem si s'ha trobat
            this.tasks[index] = task; // Actualitzem la task
            return task; // Retornem la task actualitzada
        } else {
            throw new Error(`Task with id ${task.id} not found`); 
        }
    }

    // Mètode per obtenir totes les tasques
    listTask(): Task[] {
        return this.tasks; 
    }
}