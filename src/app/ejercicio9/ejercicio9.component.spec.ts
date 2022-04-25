import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio9Component } from './ejercicio9.component';

describe('Ejercicio9Component', () => {
  let component: Ejercicio9Component;
  let fixture: ComponentFixture<Ejercicio9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejercicio9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
