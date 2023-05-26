

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';


import { Observable } from 'rxjs';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  studentNames: string[] = ['student1', 'student2', 'student3', 'student4','student5'];
  filterForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.filterForm = this.formBuilder.group({
      filter: ['']
    });
  }

  // ngOnInit() {
  //   this.filterForm = this.formBuilder.group({
  //     filter: ['']
  //   });
  // }
  
  
  }
  
  
  

