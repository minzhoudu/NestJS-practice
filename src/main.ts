import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api/v1');

  // We can set up a global middleware here, similar to express
  // app.use(SomeMiddleware)

  await app.listen(5001);
}
bootstrap();
