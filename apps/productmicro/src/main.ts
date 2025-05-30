import { NestFactory } from '@nestjs/core';
import { ProductmicroModule } from './productmicro.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ProductmicroModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'product_queue',
      },
    },
  );
  await app.listen();
}
bootstrap();
