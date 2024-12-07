import { NestFactory } from '@nestjs/core';
import { ApiModule } from './api.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiModule);
  app.enableCors({
    origin: 'http://109.120.139.129:3000',
    methods: 'GET, POST, PUT, DELETE',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true,
  });
  //TODO .env port
  await app.listen(8080);
}

bootstrap();
