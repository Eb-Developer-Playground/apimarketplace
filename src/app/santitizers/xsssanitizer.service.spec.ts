import { TestBed } from '@angular/core/testing';

import { XsssanitizerService } from './xsssanitizer.service';

describe('XsssanitizerService', () => {
  let service: XsssanitizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XsssanitizerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
