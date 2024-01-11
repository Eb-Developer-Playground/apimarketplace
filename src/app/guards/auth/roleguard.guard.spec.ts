import { TestBed } from '@angular/core/testing';

import { RoleguardGuard } from './roleguard.guard';

import { Router, RouterModule } from '@angular/router';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

describe('RoleguardGuard', () => {

  let guard: RoleguardGuard;
  let router:Router
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports:[RouterModule,HttpClientTestingModule]
    });

    guard = TestBed.inject(RoleguardGuard);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {

    expect(guard).toBeTruthy();

  });
});
