import { TestBed } from '@angular/core/testing';

import { CanAccessClientGuard } from './can-access-client.guard';

describe('CanAccessClientGuard', () => {
  let guard: CanAccessClientGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanAccessClientGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
