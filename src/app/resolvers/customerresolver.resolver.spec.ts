import { TestBed } from '@angular/core/testing';

import { CustomerresolverResolver } from './customerresolver.resolver';

describe('CustomerresolverResolver', () => {
  let resolver: CustomerresolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CustomerresolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
