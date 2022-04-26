import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex6APIComponent } from './ex6-api.component';

describe('Ex6APIComponent', () => {
  let component: Ex6APIComponent;
  let fixture: ComponentFixture<Ex6APIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex6APIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex6APIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
