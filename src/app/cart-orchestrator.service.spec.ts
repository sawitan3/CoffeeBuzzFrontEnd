import { TestBed } from '@angular/core/testing';

import { CartOrchestratorService } from './cart-orchestrator.service';

describe('CartOrchestratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartOrchestratorService = TestBed.get(CartOrchestratorService);
    expect(service).toBeTruthy();
  });
});
