import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeportfoliodetailsComponent } from './resumeportfoliodetails.component';

describe('ResumeportfoliodetailsComponent', () => {
  let component: ResumeportfoliodetailsComponent;
  let fixture: ComponentFixture<ResumeportfoliodetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeportfoliodetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeportfoliodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
