import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



@Component({
  selector: 'app-ng-select-comp',
  templateUrl: './ng-select-comp.component.html',
  styleUrls: ['./ng-select-comp.component.css']
})
export class NgSelectCompComponent {

  form: FormGroup;

  cars = [
    { id: 1, name: 'car 1' },
    { id: 2, name: 'car 2' },
    { id: 3, name: 'car 3' },

  ];
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      dropdown: ['', Validators.required],
      multipleOptions: [[]],
      searchable: ['']

    });

  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);

    }
  }
}
