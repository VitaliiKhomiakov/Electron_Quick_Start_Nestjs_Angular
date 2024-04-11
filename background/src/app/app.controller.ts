import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): { message: string } {
    return { message: this.appService.getHello() };
  }

  @Post('/hello')
  hello(): { message: string } {
    return {
      message:
        this.appService.getHello() + ' ' + Math.floor(Math.random() * 10) + 1,
    };
  }
}
