import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateaccountComponent } from './createaccount.component';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';

describe('CreateaccountComponent', () => {

  let component: CreateaccountComponent;
  let fixture:ComponentFixture<CreateaccountComponent>;

  let customerNameInput:HTMLInputElement;
  let customerErrorMessage:HTMLElement;

  let userNameInput:HTMLInputElement;
  let userNameErrorMessage:HTMLElement;

  let emailInput:HTMLInputElement;

  let submitButton:HTMLElement;

  let accountTitle:HTMLElement




  
  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports:[FormsModule,ReactiveFormsModule],
      declarations: [ CreateaccountComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateaccountComponent);

    component = fixture.componentInstance;
    
    customerNameInput = fixture.nativeElement.querySelector('input#customerName');

    userNameInput = fixture.nativeElement.querySelector('input#userName');

    emailInput = fixture.nativeElement.querySelector('input#emailAddress');

    submitButton = fixture.nativeElement.querySelector('.createAccount');

    fixture.detectChanges();

    
  });

  it('should create', () => {

    expect(component).toBeTruthy();

  });

  it('Should have account creation title',() => {

    accountTitle = fixture.nativeElement;

    expect(accountTitle.querySelector('h1')?.textContent).toContain('Account creation page');

  });

  it('Customer name validation field should be present on emtpy field',() => {

    customerErrorMessage = fixture.nativeElement.querySelector('.customerNameError');

    expect(customerErrorMessage.textContent).toBe('** Customer Name Required');

  });

  it('Customer name validation for fields less than 4 letters',() => {

    component.createCustomerForm.patchValue({
      customerName:'Kel'
    });

    fixture.detectChanges();

    customerErrorMessage = fixture.nativeElement.querySelector('.customerNameLength');

    expect(customerErrorMessage.textContent).toBe('** Customer Name should be at least 4 characters');

  });

  it('Invalid Email validation confirmation',() => {

    component.createCustomerForm.patchValue({
      emailAddress:'emailInput'
    });

    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.emailInvalid').textContent).toBe('** Email format invalid');


  });

  it('On user creation, success message to appear after 4 seconds',() => {

    component.createCustomerForm.patchValue({
      customerName:'Kelvin Waweru',
      userName:'kelvinwaweru',
      emailAddress:'kelvin@equitybank.co.ke',
      phoneNumber:'254719136031',
      password:'12345'
    });

    fixture.detectChanges();

    submitButton = fixture.nativeElement.querySelector('.createAccount');

    submitButton.click();

    setTimeout(() => {

      expect(fixture.nativeElement.querySelector('.success h2').textContent).toBe('Your account has been created succesfully');

    },5000);


  });


});
