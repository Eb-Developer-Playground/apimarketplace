import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutComponent } from './logout.component';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../../services/authentication/auth-service.service';

describe('LogoutComponent', () => {

  let component: LogoutComponent;
  let router: Router;
  let authService:AuthServiceService;
  
  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      declarations: [ LogoutComponent ],
      providers:[AuthServiceService]
    })
    .compileComponents();

    
    component = new LogoutComponent(router,authService);

    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
