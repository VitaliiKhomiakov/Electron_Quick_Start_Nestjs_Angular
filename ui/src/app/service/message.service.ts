import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageInterface } from '../interface/message.interface';
@Injectable()
export class MessageService {
  constructor(private http: HttpClient) {
  }
  helloMessage(): Observable<MessageInterface> {
    return this.http.post<MessageInterface>('http://localhost:3990/hello', {});
  }
}
