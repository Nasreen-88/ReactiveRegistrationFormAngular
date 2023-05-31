import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngxtime-picker',
  templateUrl: './ngxtime-picker.component.html',
  styleUrls: ['./ngxtime-picker.component.css']
})
export class NgxtimePickerComponent implements OnInit {

  time: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
