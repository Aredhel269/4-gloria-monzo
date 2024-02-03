// getTaskUsecase.ts
import { Task } from '../domain/entities/task';
import { TaskRepository } from '../domain/usecases/taskRepository';

export class GetTaskUsecase {
    constructor(private taskRepository: TaskRepository) {}

    execute(taskId: number) {
        return this.taskRepository.findIndexById(taskId);
    }
}
