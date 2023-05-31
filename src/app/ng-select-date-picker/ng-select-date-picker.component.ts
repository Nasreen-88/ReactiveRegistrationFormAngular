import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';


@Component({
  selector: 'app-ng-select-date-picker',
  templateUrl: './ng-select-date-picker.component.html',
  styleUrls: ['./ng-select-date-picker.component.css']
})
export class NgSelectDatePickerComponent {

  //datepickerConfig: Partial<BsDatepickerConfig>;


  // colorTheme = 'theme-green';



  // constructor() {
  //   this.datepickerConfig = {
  //     containerClass: 'colorTheme',
  //     showWeekNumbers: false
  //   };
  // }

  
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  minDate = new Date();

  constructor() {
     this.minDate.setDate(this.minDate.getDate() - 10);
     this.maxDate.setDate(this.maxDate.getDate() + 10);
     this.bsRangeValue = [this.bsValue, this.maxDate];
  }

  ngOnInit(): void {
  }

  handleDateChange(date: Date): void {
    console.log('Selected date:', date);
  }
}

