import { TestBed } from '@angular/core/testing';

import { Auth.OnlyGuestGuard } from './auth.only-guest.guard';

describe('Auth.OnlyGuestGuard', () => {
  let guard: Auth.OnlyGuestGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Auth.OnlyGuestGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
