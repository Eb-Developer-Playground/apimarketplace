import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    userName:new FormControl('',Validators['required']),
    password:new FormControl('',Validators['required'])
  });

  constructor() { }

  ngOnInit(): void {



  }

  onLoginSubmit(event:Event){

    if(this.loginForm.valid){


    }

    console.log(event);

  }

}
