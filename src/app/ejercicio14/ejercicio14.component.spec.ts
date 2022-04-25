import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio14Component } from './ejercicio14.component';

describe('Ejercicio14Component', () => {
  let component: Ejercicio14Component;
  let fixture: ComponentFixture<Ejercicio14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio14Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejercicio14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
