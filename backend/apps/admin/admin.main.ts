import { NestFactory } from '@nestjs/core';
import { AdminModule } from './admin.module';

async function bootstrap() {
  const app = await NestFactory.create(AdminModule);
  //TODO .env port
  app.enableCors();
  await app.listen(8088);
}

bootstrap();
