import { Injectable } from '@nestjs/common';
import { BaseGateway } from './base.gateway';
import { ConnectedSocket, SubscribeMessage } from '@nestjs/websockets';
import { GateService } from '../service/gate.service';
import { Socket } from 'net';

@Injectable()
export class EventGateway extends BaseGateway {
  constructor(private gateService: GateService) {
    super();
  }

  @SubscribeMessage('clientNoticeEvent')
  async noticeEvent(@ConnectedSocket() client: Socket): Promise<void> {
    await this.gateService.notice(client);
  }
}
