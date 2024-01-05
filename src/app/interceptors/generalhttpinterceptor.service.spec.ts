import { TestBed } from '@angular/core/testing';

import { GeneralhttpinterceptorService } from './generalhttpinterceptor.service';

describe('GeneralhttpinterceptorService', () => {
  let service: GeneralhttpinterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralhttpinterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
