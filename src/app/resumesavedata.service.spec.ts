import { TestBed } from '@angular/core/testing';

import { ResumesavedataService } from './resumesavedata.service';

describe('ResumetopdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResumesavedataService = TestBed.get(ResumesavedataService);
    expect(service).toBeTruthy();
  });
});
