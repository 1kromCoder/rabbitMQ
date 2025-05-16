import { NestFactory } from '@nestjs/core';
import { UsermicroModule } from './usermicro.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UsermicroModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'user_queue',
      },
    },
  );
  await app.listen();
}
bootstrap();
