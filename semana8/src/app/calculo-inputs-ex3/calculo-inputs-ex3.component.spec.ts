import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculoInputsEx3Component } from './calculo-inputs-ex3.component';

describe('CalculoInputsEx3Component', () => {
  let component: CalculoInputsEx3Component;
  let fixture: ComponentFixture<CalculoInputsEx3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculoInputsEx3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculoInputsEx3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
