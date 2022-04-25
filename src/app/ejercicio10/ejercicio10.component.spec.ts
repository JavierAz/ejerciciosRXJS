import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio10Component } from './ejercicio10.component';

describe('Ejercicio10Component', () => {
  let component: Ejercicio10Component;
  let fixture: ComponentFixture<Ejercicio10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejercicio10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
