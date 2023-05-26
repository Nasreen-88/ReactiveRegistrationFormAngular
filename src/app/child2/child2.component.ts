import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-child2',
  template: `
    <div>
      <h3>Child2 Component</h3>
      <p>Received Message: {{ receivedMessage }}</p>
    </div>
  `
})
export class Child2Component implements OnInit {
  receivedMessage: string='';

  constructor(private communicationService: CommunicationService) {}

  ngOnInit() {
    //this.receivedMessage = this.communicationService.getMessage();
    this.communicationService.message.subscribe((res:any)=>{
      this.receivedMessage = res
    })
  }
}
// unsubscribe
// behaviour subject