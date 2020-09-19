import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumetopdetailsComponent } from './resumetopdetails.component';

describe('ResumetopdetailsComponent', () => {
  let component: ResumetopdetailsComponent;
  let fixture: ComponentFixture<ResumetopdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumetopdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumetopdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
