import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  age:number = 2
  show:boolean = false;
  students:any = ["st1","st2", "st3", "st4","st5"]

  constructor() { }

  ngOnInit(): void {
  }

}
