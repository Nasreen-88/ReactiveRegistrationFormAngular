import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.css']
})

export class ReactFormComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],

      // useremail: ['', [Validators.required, Validators.email]],
      useremail:['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      userpassword: ['', [Validators.required, Validators.minLength(6)]],
      userpasswordConfirm: ['', [Validators.required]]
    }, {
      validator: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(control: AbstractControl) {
    const password = control.get('userpassword')?.value;
    const confirmPassword = control.get('userpasswordConfirm')?.value;
  
    if (password !== confirmPassword) {
      control.get('userpasswordConfirm')?.setErrors({ 'passwordMismatch': true });
      return { 'passwordMismatch': true };
    } else {
      control.get('userpasswordConfirm')?.setErrors(null);
      return null;
    }
  }
  registerUser() {
    this.submitted = true;
    if (this.registerForm.valid) {
      // Perform the registration logic
      console.log(this.registerForm.value);
    }
  }
}


// export class ReactFormComponent implements OnInit {

//   registerForm = new FormGroup({
//     username : new FormControl(''),
//     useremail : new FormControl(''),
//     userpassword : new FormControl(''),
//     userpasswordConfirm : new FormControl(''),
//   })
//   constructor() { }

//   ngOnInit(): void {
//   }

//   registerUser()
//   {
// console.log("USer registered successfully");

//   }

// }
