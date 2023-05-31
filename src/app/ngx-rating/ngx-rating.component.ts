import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngx-rating',
  templateUrl: './ngx-rating.component.html',
  styleUrls: ['./ngx-rating.component.css']
})
export class NgxRatingComponent implements OnInit {

  max: number = 10;
   value: number = 5;
   
  constructor() { }

  ngOnInit(): void {
  }

}
