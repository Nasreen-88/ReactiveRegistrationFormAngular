import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSelectDatePickerComponent } from './ng-select-date-picker.component';

describe('NgSelectDatePickerComponent', () => {
  let component: NgSelectDatePickerComponent;
  let fixture: ComponentFixture<NgSelectDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSelectDatePickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgSelectDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
