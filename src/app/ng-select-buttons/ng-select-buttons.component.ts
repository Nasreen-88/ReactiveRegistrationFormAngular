import { Component, OnInit } from '@angular/core';
import { ButtonsModule } from 'ngx-bootstrap/buttons';


@Component({
  selector: 'app-ng-select-buttons',
  templateUrl: './ng-select-buttons.component.html',
  styleUrls: ['./ng-select-buttons.component.css']
})
export class NgSelectButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  handleClick() { 
    console.log('Button clicked');
  }
}
