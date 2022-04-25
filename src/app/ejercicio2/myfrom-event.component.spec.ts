import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfromEventComponent } from './myfrom-event.component';

describe('MyfromEventComponent', () => {
  let component: MyfromEventComponent;
  let fixture: ComponentFixture<MyfromEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyfromEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyfromEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
