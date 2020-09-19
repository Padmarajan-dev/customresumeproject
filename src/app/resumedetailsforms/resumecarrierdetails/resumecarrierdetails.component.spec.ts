import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumecarrierdetailsComponent } from './resumecarrierdetails.component';

describe('ResumecarrierdetailsComponent', () => {
  let component: ResumecarrierdetailsComponent;
  let fixture: ComponentFixture<ResumecarrierdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumecarrierdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumecarrierdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
