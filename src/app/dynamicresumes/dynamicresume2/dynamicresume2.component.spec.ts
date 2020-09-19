import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dynamicresume2Component } from './dynamicresume2.component';

describe('Dynamicresume2Component', () => {
  let component: Dynamicresume2Component;
  let fixture: ComponentFixture<Dynamicresume2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dynamicresume2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dynamicresume2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
