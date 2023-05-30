import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-builtin-pipe',
  templateUrl: './builtin-pipe.component.html',
  styleUrls: ['./builtin-pipe.component.css']
})
export class BuiltinPipeComponent implements OnInit {

  currentDate: Date = new Date();
  text: string = 'Hello, World!';
  price: number = 49.99;

  object = { name: 'Raj', age: 30, city: 'New Delhi' };
  percentage = 0.75;
  sentence = 'Welcome to Amgular.';
  constructor() { }

  ngOnInit(): void {
  }

}
