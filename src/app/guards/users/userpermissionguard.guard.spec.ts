import { TestBed } from '@angular/core/testing';

import { UserpermissionguardGuard } from './userpermissionguard.guard';

describe('UserpermissionguardGuard', () => {
  let guard: UserpermissionguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserpermissionguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
