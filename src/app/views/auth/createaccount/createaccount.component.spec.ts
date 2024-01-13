import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateaccountComponent } from './createaccount.component';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';

describe('CreateaccountComponent', () => {

  let component: CreateaccountComponent;
  let fixture:ComponentFixture<CreateaccountComponent>;

  
  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports:[FormsModule,ReactiveFormsModule],
      declarations: [ CreateaccountComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateaccountComponent);

    component = fixture.componentInstance;

    fixture.detectChanges();

    
  });

  it('should create', () => {

    expect(component).toBeTruthy();

  });

  it('Should have account creation title',() => {

    const accountTitle:HTMLElement = fixture.nativeElement;

    expect(accountTitle.querySelector('h1')?.textContent).toContain('Account creation page');

  });

  xit('Customer name validation field should be present on emtpy field',() => {


  });

  xit('Customer name validation for fields less than 4 letters',() => {


  });

  xit('Customer name validation for fields less than 4 letters',() => {


  });

  xit('On user creation, success message to appear after 4 seconds',() => {


  });

  xit('On click of login, user to be redirected to login page',() => {


  });

});
