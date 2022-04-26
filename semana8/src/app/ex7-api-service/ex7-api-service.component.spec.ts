import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex7ApiServiceComponent } from './ex7-api-service.component';

describe('Ex7ApiServiceComponent', () => {
  let component: Ex7ApiServiceComponent;
  let fixture: ComponentFixture<Ex7ApiServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex7ApiServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex7ApiServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
