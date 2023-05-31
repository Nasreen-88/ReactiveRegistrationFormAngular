import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPopOverComponent } from './ngx-pop-over.component';

describe('NgxPopOverComponent', () => {
  let component: NgxPopOverComponent;
  let fixture: ComponentFixture<NgxPopOverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxPopOverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxPopOverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
