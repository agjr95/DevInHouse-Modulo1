import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex3CalculoComponent } from './ex3-calculo.component';

describe('Ex3CalculoComponent', () => {
  let component: Ex3CalculoComponent;
  let fixture: ComponentFixture<Ex3CalculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex3CalculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex3CalculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
