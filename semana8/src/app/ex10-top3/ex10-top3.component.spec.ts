import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex10Top3Component } from './ex10-top3.component';

describe('Ex10Top3Component', () => {
  let component: Ex10Top3Component;
  let fixture: ComponentFixture<Ex10Top3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex10Top3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex10Top3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
