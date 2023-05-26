import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedformArrayComponent } from './nestedform-array.component';

describe('NestedformArrayComponent', () => {
  let component: NestedformArrayComponent;
  let fixture: ComponentFixture<NestedformArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedformArrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedformArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
