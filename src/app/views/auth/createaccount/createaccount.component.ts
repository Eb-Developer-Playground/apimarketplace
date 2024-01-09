import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.scss']
})
export class CreateaccountComponent implements OnInit {

  createCustomerForm:FormGroup;
  loading:boolean = false;
  accountCreated:boolean = false;
  errorCreatingAccount:boolean = false;

  constructor() { 

    this.createCustomerForm = new FormGroup({

      customerName:new FormControl('',[Validators.required,Validators.minLength(4)]),
      emailAddress:new FormControl('',[Validators.email,Validators.required]),
      userName:new FormControl('',[Validators.minLength(4),Validators.required,Validators.maxLength(15)]),
      phoneNumber:new FormControl('',[Validators.pattern(''),Validators.required]),
      password:new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern('')])
    
    });

    //Password strength regex ^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$

  }

  ngOnInit(): void {

  }

  createAccountSubmit(event:Event){

    console.log("Creation Data",this.createCustomerForm.getRawValue());

    this.loading = true;

    if(this.createCustomerForm.valid){

      setTimeout(() => {

        this.loading = false;
        this.accountCreated = true;
        this.errorCreatingAccount = false;

      },4000)

    }else{

      this.loading = false;
      this.errorCreatingAccount = true;

    }

  }

}
