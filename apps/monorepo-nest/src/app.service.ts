import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('MAIL_SERVICE') private clientMail: ClientProxy) {}
  getHello(): string {
    return 'Hello im mail microservice!';
  }

  newUser() {
    const mockUser = {
      email: 'Leifer@mail.com',
      name: 'Fabio Castagnola',
      avaatr: 'http://images.com',
    };
    this.clientMail.emit('new_mail', mockUser);
  }
}
