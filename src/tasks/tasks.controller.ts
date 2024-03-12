import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getTasks(): string[] {
    return this.tasksService.getTasks();
  }

  @Post()
  addTask(@Body() task: string): void {
    this.tasksService.addTask(task);
  }

  @Put(':index')
  updateTask(@Param('index') index: string, @Body() task: string): void {
    this.tasksService.updateTask(+index, task);
  }

  @Delete(':index')
  deleteTask(@Param('index') index: string): void {
    this.tasksService.deleteTask(+index);
  }
}
