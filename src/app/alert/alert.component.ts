import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  @Input()
  alertType!: string; // Alert type: 'alert-success', 'alert-info', 'alert-warning', 'alert-danger'
  @Input() dismissible: boolean = true; // Whether the alert is dismissible
  showAlert: boolean = true;

  closeAlert(): void {
    this.showAlert = false;
  }
}




