import { Task } from "../domain/entities/task";
import { TaskRepository } from "../domain/usecases/taskRepository";

export class CreateTaskUsecase {
    constructor(private taskRepository: TaskRepository) {}

    execute(task: Task): Task {
        return this.taskRepository.createTask(task);
    }
}