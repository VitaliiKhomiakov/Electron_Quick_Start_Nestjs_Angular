import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable()
export class NoticeService {
  constructor(private socket: Socket) {
  }

  initClientNotice() {
    this.socket.emit('clientNoticeEvent');
  }
  getNotice<T>(): Observable<T> {
    return this.listener<T>('serverNoticeEvent');
  }

  private listener<T>(eventName: string): Observable<T> {
    return new Observable<T>(subscriber => {
      this.socket.on(eventName, (response: T) => {
        return subscriber.next(response);
      });
    });
  }
}
