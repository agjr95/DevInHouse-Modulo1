import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2BuscaComponent } from './ex2-busca.component';

describe('Ex2BuscaComponent', () => {
  let component: Ex2BuscaComponent;
  let fixture: ComponentFixture<Ex2BuscaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex2BuscaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex2BuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
