import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex1LoginComponent } from './ex1-login.component';

describe('Ex1LoginComponent', () => {
  let component: Ex1LoginComponent;
  let fixture: ComponentFixture<Ex1LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex1LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex1LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
