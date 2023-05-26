import { Component, ComponentRef, ViewChild } from '@angular/core';
import { CommunicationService } from '../communication.service';
import { Child2Component } from '../child2/child2.component';

@Component({
  selector: 'app-child1',
  template: `
    <div>
      <h3>Child1 Component</h3>
      <!-- <input type="text" [(ngModel)]="message" placeholder="Enter message"> -->
      <button (click)="sendMessage()">Send</button>
    </div>
  `
})
export class Child1Component {
  message: string = '';
  // @ViewChild(Child2Component) childComponentRef!: ComponentRef<Child2Component>;
  @ViewChild(Child2Component,{static: false}) childComponent!: Child2Component;



  constructor(private communicationService: CommunicationService) {}


  sendMessage() {
    // this.childComponent.receivedMessage = this.message

    this.communicationService.message.next(this.message)

  //  this.communicationService.sendMessage(this.message);
     this.message = ''; // Clear the input after sending the message
  }

}
