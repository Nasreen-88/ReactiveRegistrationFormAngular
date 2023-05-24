import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { NumberOnlyDirective } from './number-only.directive';
import { StudentFilterPipe } from './student-filter.pipe';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { StudentListComponent } from './student-list/student-list.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { DataService } from './data.service'
import { ServiceDataComponent } from './service-data/service-data.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ExampleComponent } from './reactive-form-validation/reactive-form-validation.component';
import { TemplateFormComponent } from './template-driven-form/template-driven-form.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { ReactFormComponent } from './react-form/react-form.component';



@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    NumberOnlyDirective,
    StudentFilterPipe,
    Child1Component,
    Child2Component,
    StudentListComponent,
    ParentComponent,
    ChildComponent,
    ServiceDataComponent,
    ReactiveFormComponent,
    TemplateFormComponent,
    ExampleComponent,
    FormArrayComponent,
    ReactFormComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
