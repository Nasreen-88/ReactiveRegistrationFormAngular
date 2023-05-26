// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

import { DirectivesComponent } from './directives/directives.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { ParentComponent } from './parent/parent.component';
import { ReactFormComponent } from './react-form/react-form.component';
import { ServiceDataComponent } from './service-data/service-data.component'
import { StudentListComponent } from './student-list/student-list.component'
import { TemplateFormComponent } from './template-driven-form/template-driven-form.component'


const routes: Routes = [
  {path:'', component: Child1Component},
  {path:'child2', component: Child2Component},
  {path:'Directive', component: DirectivesComponent},
  {path:'Form Array', component: FormArrayComponent},
  {path:'Parent to Child ', component:ParentComponent },
  {path:'Reactive form Registration', component: ReactFormComponent },
  {path:' Service', component: ServiceDataComponent },
  {path:'filter student pipe ', component:StudentListComponent },
  {path:' Template form', component: TemplateFormComponent},
  // {path:'**', component: ErrorComponent}
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
