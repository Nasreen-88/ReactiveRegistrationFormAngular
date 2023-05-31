import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxtimePickerComponent } from './ngxtime-picker.component';

describe('NgxtimePickerComponent', () => {
  let component: NgxtimePickerComponent;
  let fixture: ComponentFixture<NgxtimePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxtimePickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxtimePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
