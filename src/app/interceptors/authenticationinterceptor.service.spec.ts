import { TestBed } from '@angular/core/testing';

import { AuthenticationinterceptorService } from './authenticationinterceptor.service';

describe('AuthenticationinterceptorService', () => {
  let service: AuthenticationinterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationinterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
