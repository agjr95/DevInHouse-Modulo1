import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaEx2Component } from './busca-ex2.component';

describe('BuscaEx2Component', () => {
  let component: BuscaEx2Component;
  let fixture: ComponentFixture<BuscaEx2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscaEx2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaEx2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
