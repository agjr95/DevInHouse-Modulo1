import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex9PopularComponent } from './ex9-popular.component';

describe('Ex9PopularComponent', () => {
  let component: Ex9PopularComponent;
  let fixture: ComponentFixture<Ex9PopularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex9PopularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex9PopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
