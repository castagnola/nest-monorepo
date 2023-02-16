import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { MailappService } from './mailapp.service';

@Controller()
export class MailappController {
  constructor(private readonly mailappService: MailappService) {}

  @EventPattern('new_mail')
  handleNewEmail(data: any) {
    console.log('Este es el evento entrante', data);
  }
}
