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
  logout(){};


}

describe('LogoutComponent', () => {

  let component: LogoutComponent;
  let fixture:ComponentFixture<LogoutComponent>
  let router: Router;
  let authService:AuthServiceService;
  
  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      providers:[LogoutComponent,{ provide: AuthServiceService, useClass: MockAuthService }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoutComponent);

    component = fixture.componentInstance;

    authService = TestBed.inject(AuthServiceService);

    //component = new LogoutComponent(router,authService);

    
  });

  it('should create', () => {

    expect(component).toBeTruthy();

  });

  it('Should contain heading you have been logged out',()=>{

    component.ngOnInit();

    expect(fixture.nativeElement.querySelector('h1').textContent).toContain('You have been logged out');

  });


});


