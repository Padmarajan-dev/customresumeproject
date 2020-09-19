import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumedetailsformComponent } from './resumedetailsform.component';

describe('ResumedetailsformComponent', () => {
  let component: ResumedetailsformComponent;
  let fixture: ComponentFixture<ResumedetailsformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumedetailsformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumedetailsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
