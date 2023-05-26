import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-array-example',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {
  myForm!: FormGroup;

  ngOnInit() {
    this.myForm = new FormGroup({
      email: new FormControl(''),
      phones: new FormArray([])
    });
  }

  get phoneForms() {
    return this.myForm.get('phones') as FormArray;
  }

  addPhone() {
    const phone = new FormGroup({
      area: new FormControl(''),
      prefix: new FormControl(''),
      line: new FormControl('')
    });

    this.phoneForms.push(phone);
  }

  deletePhone(i: number) {
    this.phoneForms.removeAt(i);
  }

  onSubmit() {
    console.log(this.myForm.value);
  }
}
