import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks: string[] = [];

  getTasks(): string[] {
    return this.tasks;
  }

  addTask(task: string): void {
    this.tasks.push(task);
  }

  updateTask(index: number, task: string): void {
    this.tasks[index] = task;
  }

  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
  }
}
