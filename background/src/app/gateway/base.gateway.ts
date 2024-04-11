import { WebSocketGateway } from '@nestjs/websockets';
import { APP_SOCKET_PORT } from '../app.const';

@WebSocketGateway(APP_SOCKET_PORT, {
  cors: {
    origin: '*',
  },
  transports: ['websocket'],
})
export class BaseGateway {}
