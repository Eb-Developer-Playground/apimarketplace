import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutComponent } from './logout.component';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../../services/authentication/auth-service.service';

class MockAuthService {

  isAuthenticated = true;
  authSecretKey = { name: 'Test User' };
  superAdminPermissions = {};
  registeredCustomerPermissions = {};
  generalUserPermissions = {};


}

describe('LogoutComponent', () => {

  let component: LogoutComponent;
  let router: Router;
  let authService:AuthServiceService;
  
  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      providers:[LogoutComponent,{ provide: AuthServiceService, useClass: MockAuthService }]
    })
    .compileComponents();

    component = TestBed.inject(LogoutComponent);
    authService = TestBed.inject(AuthServiceService);

    //component = new LogoutComponent(router,authService);

    
  });

  it('should create', () => {

    expect(component).toBeTruthy();

  });

  xit('Should contain heading you have been logged out',()=>{

    component.ngOnInit();

    expect(component).toContain('You have been logged out');

  });


});


