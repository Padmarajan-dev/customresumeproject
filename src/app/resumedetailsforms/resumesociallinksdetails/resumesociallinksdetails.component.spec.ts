import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumesociallinksdetailsComponent } from './resumesociallinksdetails.component';

describe('ResumesociallinksdetailsComponent', () => {
  let component: ResumesociallinksdetailsComponent;
  let fixture: ComponentFixture<ResumesociallinksdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumesociallinksdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumesociallinksdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
