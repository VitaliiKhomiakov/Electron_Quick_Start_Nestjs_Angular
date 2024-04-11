import { Component } from '@angular/core';
import { NoticeService } from '../../service/notice.service';
import { MessageInterface } from '../../interface/message.interface';
import { MessageService } from '../../service/message.service';

// @ts-ignore
@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrl: './core.component.scss'
})
export class CoreComponent {
  public messages: number[] = [];
  public helloMessage: string = '';
  constructor(private noticeService: NoticeService, private messageService: MessageService) {
    this.noticeService.getNotice<MessageInterface>()
      .subscribe(message => {
        this.messages.push(Number(message.message));
        this.messages.length > 10 && this.messages.shift();
      });

    this.noticeService.initClientNotice();
  }

  public hello(): void {
    this.messageService.helloMessage()
      .subscribe(message => this.helloMessage = message.message);
  }
}
