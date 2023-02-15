import { Injectable } from '@nestjs/common';

@Injectable()
export class MailappService {
  getHello(): string {
    return 'Hello Im the Microservice!';
  }
}
