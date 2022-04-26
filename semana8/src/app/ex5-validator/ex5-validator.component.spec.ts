import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex5ValidatorComponent } from './ex5-validator.component';

describe('Ex5ValidatorComponent', () => {
  let component: Ex5ValidatorComponent;
  let fixture: ComponentFixture<Ex5ValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex5ValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex5ValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
