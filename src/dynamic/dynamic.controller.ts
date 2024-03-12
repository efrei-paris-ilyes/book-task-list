import { Controller, Get, Post } from '@nestjs/common';

@Controller('dynamic')
export class DynamicController {
  @Get()
  getDynamicData(): string {
    return 'Liste dynamique de livres';
  }

  @Post()
  addTask(): string {
    return 'Ajouter un livre';
  }
}
