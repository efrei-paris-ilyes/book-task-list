import { Module } from '@nestjs/common';
import { StaticModule } from './static/static.module';
import { DynamicModule } from './dynamic/dynamic.module';

@Module({
  imports: [StaticModule, DynamicModule],
})
export class AppModule {}
