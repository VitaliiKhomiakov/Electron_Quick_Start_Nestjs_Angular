import { Module } from '@nestjs/common';
import { EventGateway } from './event.gateway';
import { GateService } from '../service/gate.service';
import { Socket } from 'net';

@Module({
  imports: [],
  providers: [GateService, EventGateway, Socket],
})
export class GatewayModule {}
