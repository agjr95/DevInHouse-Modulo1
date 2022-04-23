import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex4FormComponent } from './ex4-form.component';

describe('Ex4FormComponent', () => {
  let component: Ex4FormComponent;
  let fixture: ComponentFixture<Ex4FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex4FormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex4FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
