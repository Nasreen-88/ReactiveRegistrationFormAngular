import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-nestedform-array',
  templateUrl: './nestedform-array.component.html',
  styleUrls: ['./nestedform-array.component.css']
})
export class NestedformArrayComponent implements OnInit {
  userForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      users: this.fb.array([]) // initializing an empty array
    });
  }

  get userArray() {
    return this.userForm.get('users') as FormArray;
  }

  addUser() {
    const userGroup = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    this.userArray.push(userGroup);
  }

  removeUser(index: number) {
    this.userArray.removeAt(index);
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    }
  }
}