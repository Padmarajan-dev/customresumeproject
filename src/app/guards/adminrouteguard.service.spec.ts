import { TestBed } from '@angular/core/testing';

import { AdminrouteguardService } from './adminrouteguard.service';

describe('AdminrouteguardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminrouteguardService = TestBed.get(AdminrouteguardService);
    expect(service).toBeTruthy();
  });
});
