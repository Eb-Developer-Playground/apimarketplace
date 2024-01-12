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

});
