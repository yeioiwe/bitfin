import { NestFactory } from '@nestjs/core';
import { AdminModule } from './admin.module';

async function bootstrap() {
  const app = await NestFactory.create(AdminModule);
  //TODO .env port
  app.enableCors({
    origin: 'http://109.120.139.129:3000',
    methods: 'GET, POST, PUT, DELETE',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true,
  });

  await app.listen(8088);
}

bootstrap();
