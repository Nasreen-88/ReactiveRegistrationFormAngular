import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  loginForm = new FormGroup({
    usrname : new FormControl('Nasreen'),
    usrpassword : new FormControl('123456')

  })

  constructor() { }

  ngOnInit(): void {
    console.log(this.loginForm);
    
  }
loginUser()
{
  console.log(this.loginForm.value);
  
}
}
