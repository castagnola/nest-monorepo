import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  newUser(@Body() body: any): string {
    //ideal usar DTO
    return this.appService.newUser(body);
  }
}
