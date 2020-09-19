import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dynamicresume3Component } from './dynamicresume3.component';

describe('Dynamicresume3Component', () => {
  let component: Dynamicresume3Component;
  let fixture: ComponentFixture<Dynamicresume3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dynamicresume3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dynamicresume3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
