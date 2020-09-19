import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatePerformanceComponent } from './template-performance.component';

describe('TemplatePerformanceComponent', () => {
  let component: TemplatePerformanceComponent;
  let fixture: ComponentFixture<TemplatePerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatePerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatePerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
