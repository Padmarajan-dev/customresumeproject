import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeaboutsdetailsComponent } from './resumeaboutsdetails.component';

describe('ResumeaboutsdetailsComponent', () => {
  let component: ResumeaboutsdetailsComponent;
  let fixture: ComponentFixture<ResumeaboutsdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeaboutsdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeaboutsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
