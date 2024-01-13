import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { By } from '@angular/platform-browser';

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
  let userNameInput:HTMLInputElement; 
  let emailValidationMessage:HTMLElement;
  let passwordInput : HTMLInputElement;
  let loginButton : HTMLElement;
  let successView : HTMLElement;

  beforeEach(async () =>{

    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations:[LoginComponent],
      providers:[Router]
    });

    fixture = TestBed.createComponent(LoginComponent);

    http = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);

    component = fixture.componentInstance;

    userNameInput = fixture.nativeElement.querySelector('input#userName');

    passwordInput = fixture.nativeElement.querySelector("input#password");

    loginButton = fixture.nativeElement.querySelector("button.loginButton");

    fixture.detectChanges();

    

  });

  it('should create', () => {

    expect(component).toBeDefined();

  });

  it('Page should have welcome message',() =>{

    const welcomeMessage = fixture.nativeElement.querySelector('h1');


    expect(welcomeMessage.textContent).toContain('Welcome to Equity');

  })

  it('Email field should be empty by default',()=>{

    expect(userNameInput.value).toBe('');

  })

  it('Should show email validation message on emtpy email field',() => {

    emailValidationMessage = fixture.nativeElement.querySelector('.usernamerequired');

    fixture.detectChanges();
    
    expect(emailValidationMessage.textContent).toContain('** User Name Required');

    // console.log(userNameInput);
    
    // const nameInput: HTMLInputElement = hostElement.querySelector('input')!;
    // const nameDisplay: HTMLElement = hostElement.querySelector('span')!;

    // simulate user entering a new name into the input box
    // nameInput.value = 'registereduser';

    // Dispatch a DOM event so that Angular learns of input value change.
    //nameInput.dispatchEvent(new Event('input'));

    // fixture.detectChanges();

    // userNameInput = fixture.nativeElement.By

  });

  it('Email should update on value update',() => {

    userNameInput.value = 'johnakello';

    userNameInput.dispatchEvent(new Event('input'));

    // emailValidationMessage = fixture.nativeElement.querySelector('.usernamerequired');

    fixture.detectChanges();

    expect(userNameInput.value).toContain('johnakello');


  });
  
  it('Should remove email validation message in case of email entry',() => {

    component.ngOnInit();
    component.loginForm.patchValue({
      userName: "johnakello"
    });

    userNameInput.dispatchEvent(new Event('input'));

    // emailValidationMessage = fixture.nativeElement.querySelector('.usernamerequired');

    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.usernamerequired')).toBeNull();


  });

  it('User login without error message',async ()=>{

    component.ngOnInit();
    component.loginForm.patchValue({
      userName: "johnakello",
      password:"pass123"
    });

    // userNameInput.value = 'johnakello';
    // userNameInput.dispatchEvent(new Event('input'));

    // passwordInput.value = 'pass123';
    // passwordInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    loginButton.click();

    fixture.detectChanges();

    expect(component.loginError).toBe(false);
    // expect(TestBed.inject(Router).url).toBe('/home');

    

  });

  


});
