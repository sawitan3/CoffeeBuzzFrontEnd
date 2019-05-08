import { TestBed, async, inject } from '@angular/core/testing';

import { BaristaGuard } from './barista.guard';

describe('BaristaGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaristaGuard]
    });
  });

  it('should ...', inject([BaristaGuard], (guard: BaristaGuard) => {
    expect(guard).toBeTruthy();
  }));
});
