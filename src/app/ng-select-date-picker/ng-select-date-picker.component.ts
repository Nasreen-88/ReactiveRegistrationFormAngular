import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';


@Component({
  selector: 'app-ng-select-date-picker',
  templateUrl: './ng-select-date-picker.component.html',
  styleUrls: ['./ng-select-date-picker.component.css']
})
export class NgSelectDatePickerComponent {

  datepickerConfig: Partial<BsDatepickerConfig>;

  constructor() {
    this.datepickerConfig = {
      containerClass: 'theme-default',
      showWeekNumbers: false
    };
  }

  handleDateChange(date: Date): void {
    console.log('Selected date:', date);
  }
}

