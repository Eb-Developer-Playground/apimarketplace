import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/authentication/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[AuthServiceService]
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    userName:new FormControl('',Validators['required']),
    password:new FormControl('',Validators['required'])
  });

  loginError:boolean = false;

  constructor(
    private authService:AuthServiceService,
    private router:Router
  ){ 


  }

  ngOnInit(): void {



  }

  onLoginSubmit(event:Event){

    if(this.loginForm.valid){

      console.log('Submitted data',this.loginForm.getRawValue());

      if(this.authService.login(this.loginForm.getRawValue())){

        this.router.navigate(['/home']);

      }else{

        this.loginError = true;
        console.log("Login Error exists");

      }
      

    }


  }

}
