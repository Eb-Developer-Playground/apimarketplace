import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

import { AuthServiceService } from '../../../services/authentication/auth-service.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

class MockAuthService{

  loginError = false;

}

// ,imports:[
//   FormsModule,
//   HttpClient
// ],providers:[
//   AuthServiceService,{
//     provide:AuthServiceService,
//     useClass:MockAuthService
//   }
  
// ]

describe('LoginComponent', () => {

  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService:AuthServiceService;
  let http:HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(async () =>{

    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations:[LoginComponent]
    });

    fixture = TestBed.createComponent(LoginComponent);

    http = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);

    component = fixture.componentInstance;

    fixture.detectChanges();

    

  });

  it('should create', () => {

    expect(component).toBeDefined();

  });

  

  


});
