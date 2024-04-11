import { Injectable } from '@nestjs/common';
import { Socket } from 'net';

@Injectable()
export class GateService {
  async notice(client: Socket): Promise<void> {
    setInterval(() => {
      client.emit('serverNoticeEvent', {
        message: Math.floor(Math.random() * 1000) + 1,
      });
    }, 3000);
  }
}
