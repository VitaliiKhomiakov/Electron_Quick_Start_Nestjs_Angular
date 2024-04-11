import { NgModule } from '@angular/core';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { CoreComponent } from './core.component';
import { NoticeService } from '../../service/notice.service';
import { NgForOf } from '@angular/common';
import { MessageService } from '../../service/message.service';
import { HttpClientModule } from '@angular/common/http';

const config: SocketIoConfig = { url: 'ws://localhost:3991', options: { transports: ['websocket'], reconnection: true } };

@NgModule({
  declarations: [CoreComponent],
  imports: [
    SocketIoModule.forRoot(config),
    NgForOf,
    HttpClientModule
  ],
  providers: [NoticeService, MessageService],
  exports: [CoreComponent],
})
export class CoreModule {}
