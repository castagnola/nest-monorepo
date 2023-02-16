import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'MAIL_SERVICE', transport: Transport.TCP }, //este es un microservicio, el microservicio y el modulo se comunican por la misma capa de transporte
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
