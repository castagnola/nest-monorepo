import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from 'apps/monorepo-nest/src/app.module';
import { MailappModule } from './mailapp.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MailappModule,
    {
      transport: Transport.TCP, //Capa de transporte tcp
    },
  );
  await app.listen();
}
bootstrap();
