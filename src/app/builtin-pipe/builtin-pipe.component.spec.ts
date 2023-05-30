import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltinPipeComponent } from './builtin-pipe.component';

describe('BuiltinPipeComponent', () => {
  let component: BuiltinPipeComponent;
  let fixture: ComponentFixture<BuiltinPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuiltinPipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuiltinPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
