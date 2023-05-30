import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSelectCompComponent } from './ng-select-comp.component';

describe('NgSelectCompComponent', () => {
  let component: NgSelectCompComponent;
  let fixture: ComponentFixture<NgSelectCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSelectCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgSelectCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
