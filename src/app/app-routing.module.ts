// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

import { DirectivesComponent } from './directives/directives.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { ParentComponent } from './parent/parent.component';
import { ReactFormComponent } from './react-form/react-form.component';
import { ServiceDataComponent } from './service-data/service-data.component'
import { StudentListComponent } from './student-list/student-list.component'
import { TemplateFormComponent } from './template-driven-form/template-driven-form.component'
import { RouterModule, Routes } from '@angular/router';
import { BuiltinPipeComponent } from './builtin-pipe/builtin-pipe.component';
import { NumberOnlyDirective } from './number-only.directive';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgxTooltipComponent } from './ngx-tooltip/ngx-tooltip.component';
import { NgSelectCompComponent } from './ng-select-comp/ng-select-comp.component';
import { AccordionComponent } from 'ngx-bootstrap/accordion';
import { AlertComponent } from './alert/alert.component';
import { NgSelectDatePickerComponent } from './ng-select-date-picker/ng-select-date-picker.component';
import { NgSelectButtonsComponent } from './ng-select-buttons/ng-select-buttons.component';


const routes: Routes = [
  // {path:'child1', component: Child1Component},
  // {path:'child2', component: Child2Component},
  {path:'directives', component: DirectivesComponent},
  // {path:'custom-directives', component: NumberOnlyDirective},
  {path:'Form-array', component: FormArrayComponent},
  {path:'parent', component:ParentComponent },
  {path:'react-form', component: ReactFormComponent },
  {path:'built-in-pipe', component: BuiltinPipeComponent },
  {path:'filter-student-pipe', component:StudentListComponent },

  {path:'accordion', component: AccordionComponent},
  {path:'alert', component: AlertComponent},
  {path:'datepicker', component: NgSelectDatePickerComponent},
  {path:'toolTip', component: NgxTooltipComponent},
  {path:'buttons', component: NgSelectButtonsComponent},
  {path:'ng-select', component: NgSelectCompComponent},

  // {path:'', redirectTo: '/home'},
  {path:'', component: HomeComponent},

  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
