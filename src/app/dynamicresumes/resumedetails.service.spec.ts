import { TestBed } from '@angular/core/testing';

import { ResumedetailsService } from './resumedetails.service';

describe('ResumedetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResumedetailsService = TestBed.get(ResumedetailsService);
    expect(service).toBeTruthy();
  });
});
