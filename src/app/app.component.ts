import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Training_Week1';


  filterForm: FormGroup | null = null;;
  students = ['John Doe', 'Jane Smith', 'Alice Johnson', 'Bob Anderson'];
  filteredStudents$: Observable<string[]> | undefined;


  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.filterForm = this.formBuilder.group({
      filterText: ['']
    });

    this.filteredStudents$ = this.filterForm.get('filterText')?.valueChanges.pipe(
      startWith(''),
      map(filterText => this.filterStudents(filterText))
    );
  }

  filterStudents(filterText: string): string[] {
    if (!filterText) {
      return this.students;
    }

    filterText = filterText.toLowerCase();
    return this.students.filter(student => student.toLowerCase().includes(filterText));
  }
}

