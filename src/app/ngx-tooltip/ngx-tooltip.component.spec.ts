import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTooltipComponent } from './ngx-tooltip.component';

describe('NgxTooltipComponent', () => {
  let component: NgxTooltipComponent;
  let fixture: ComponentFixture<NgxTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxTooltipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
