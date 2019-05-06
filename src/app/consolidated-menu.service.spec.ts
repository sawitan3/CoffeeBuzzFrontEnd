import { TestBed } from '@angular/core/testing';

import { ConsolidatedMenuService } from './consolidated-menu.service';

describe('ConsolidatedMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsolidatedMenuService = TestBed.get(ConsolidatedMenuService);
    expect(service).toBeTruthy();
  });
});
