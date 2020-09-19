import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsdetailsformComponent } from './skillsdetailsform.component';

describe('SkillsdetailsformComponent', () => {
  let component: SkillsdetailsformComponent;
  let fixture: ComponentFixture<SkillsdetailsformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsdetailsformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsdetailsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
