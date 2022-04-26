import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex8LoadingComponent } from './ex8-loading.component';

describe('Ex8LoadingComponent', () => {
  let component: Ex8LoadingComponent;
  let fixture: ComponentFixture<Ex8LoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex8LoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex8LoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
