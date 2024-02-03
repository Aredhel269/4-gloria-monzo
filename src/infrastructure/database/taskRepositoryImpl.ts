import { Task } from "../../domain/entities/task";
import { TaskRepository } from "../../domain/usecases/taskRepository";

export class TaskRepositoryImpl implements TaskRepository {
  // enlloc de constructor, inicio amb un array buit
  private tasks: Task[] = []; // private --> accessible només a aquesta class

    // mètodes
    createTask(task: Task) {
    this.tasks.push(task);
    return task;
    }

    completeTask(id: number) {    
        const taskIndex = this.findIndexById(id);
        if (taskIndex !== -1) {
            this.tasks[taskIndex].completed = true;
        } else {
            throw new Error(`Task with id ${id} not found`);
        }
    }

    deleteTask(id: number) {
        const taskIndex = this.findIndexById(id);
        if (taskIndex !== -1) {
            this.tasks.splice(taskIndex, 1);
        } else {
            throw new Error(`Task with id ${id} not found`);
        }
    }

    findIndexById(id: number) {
        return this.tasks.findIndex((task) => task.id == id);
    }

    updateList(task: Task) {
        const index = this.findIndexById(task.id);
        if (index !== -1) {
            this.tasks[index] = task;
            return task;    
        } else {
            throw new Error;
        }
    }

    listTask() {
        return this.tasks;
    }
}
