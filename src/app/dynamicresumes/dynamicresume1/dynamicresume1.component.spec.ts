import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { dynamicResume1Component } from './dynamicresume1.component';

describe('dynamicResume1Component', () => {
  let component: dynamicResume1Component;
  let fixture: ComponentFixture<dynamicResume1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ dynamicResume1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(dynamicResume1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
