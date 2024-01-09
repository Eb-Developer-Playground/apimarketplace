import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.scss']
})
export class CreateaccountComponent implements OnInit {

  createCustomerForm:FormGroup;

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

}
