import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Serie2Component } from './serie2.component';

describe('Serie2Component', () => {
  let component: Serie2Component;
  let fixture: ComponentFixture<Serie2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Serie2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Serie2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
