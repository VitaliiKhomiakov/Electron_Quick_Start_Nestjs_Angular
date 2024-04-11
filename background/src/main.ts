import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { APP_PORT } from './app/app.const';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(APP_PORT);
}
bootstrap();
