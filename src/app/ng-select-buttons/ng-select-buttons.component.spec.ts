import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSelectButtonsComponent } from './ng-select-buttons.component';

describe('NgSelectButtonsComponent', () => {
  let component: NgSelectButtonsComponent;
  let fixture: ComponentFixture<NgSelectButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSelectButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgSelectButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
