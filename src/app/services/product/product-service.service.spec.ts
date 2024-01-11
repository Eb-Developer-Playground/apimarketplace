import { TestBed } from '@angular/core/testing';

import { ProductServiceService } from './product-service.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

describe('ProductServiceService', () => {

  let service: ProductServiceService;
  let httpClient:HttpClient;
  let httpTestingController:HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers:[ProductServiceService,HttpClient]
    });

    service = TestBed.inject(ProductServiceService);

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {

    expect(service).toBeTruthy();
    
  });
});
