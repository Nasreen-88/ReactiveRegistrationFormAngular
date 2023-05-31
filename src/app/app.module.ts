import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { NumberOnlyDirective } from './number-only.directive';
import { StudentFilterPipe } from './student-filter.pipe';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { NestedformArrayComponent } from './nestedform-array/nestedform-array.component';


import { BsDropdownConfig, BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule , BsDatepickerConfig} from 'ngx-bootstrap/datepicker';


import { AlertComponent } from './alert/alert.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgxCarouselComponent } from './ngx-carousel/ngx-carousel.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { TooltipModule } from 'ngx-bootstrap/tooltip';


import { CommonModule } from '@angular/common';
import { NgSelectCompComponent } from './ng-select-comp/ng-select-comp.component';
import { NgxTooltipComponent } from './ngx-tooltip/ngx-tooltip.component';
import { BuiltinPipeComponent } from './builtin-pipe/builtin-pipe.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgSelectButtonsComponent } from './ng-select-buttons/ng-select-buttons.component';
import { NgSelectDatePickerComponent } from './ng-select-date-picker/ng-select-date-picker.component';
import { NgxModalComponent } from './ngx-modal/ngx-modal.component';

import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { NgxtimePickerComponent } from './ngxtime-picker/ngxtime-picker.component';
import { NgxPopOverComponent } from './ngx-pop-over/ngx-pop-over.component';
import { NgxPaginationComponent } from './ngx-pagination/ngx-pagination.component';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { PaginationModule,PaginationConfig } from 'ngx-bootstrap/pagination';
import { PopoverModule, PopoverConfig } from 'ngx-bootstrap/popover';
import { NgxRatingComponent } from './ngx-rating/ngx-rating.component';
import { RatingModule, RatingConfig } from 'ngx-bootstrap/rating';







// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';





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
    ReactFormComponent,
    NestedformArrayComponent,
    AccordionComponent,
    AlertComponent,
    NgxCarouselComponent,
    NgSelectCompComponent,
    NgxTooltipComponent,
    BuiltinPipeComponent,
    HomeComponent,
    PageNotFoundComponent,
    NgSelectButtonsComponent,
    NgSelectDatePickerComponent,
    NgxModalComponent,
    NgxtimePickerComponent,
    NgxPopOverComponent,
    NgxPaginationComponent,
    NgxRatingComponent,
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AccordionModule,
    BrowserAnimationsModule,
    CarouselModule,
    ButtonsModule,
    BsDatepickerModule,
    CommonModule,
    NgSelectModule,
    TooltipModule,
    ModalModule,
    TimepickerModule.forRoot(),
    PaginationModule,
    PopoverModule,
    RatingModule,


    
  ],
  providers: [BsDatepickerConfig, BsDropdownConfig,BsModalService,PaginationConfig,RatingConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
