import { TestBed } from '@angular/core/testing';

import { DomsanitizerService } from './domsanitizer.service';

describe('DomsanitizerService', () => {
  let service: DomsanitizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DomsanitizerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
