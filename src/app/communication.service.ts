import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
   message  = new Subject();

  // sendMessage(message1: any) {
  //   this.message = message1;
  // }

  // getMessage(): any {
  //   return this.message;
  // }
}
