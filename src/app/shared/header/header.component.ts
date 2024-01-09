import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/authentication/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers:[AuthServiceService]
})
export class HeaderComponent implements OnInit {

  navigation:any = [];
  permissions:any = [''];
  userAuthenticated:boolean = false;

  constructor(
    private authService:AuthServiceService
  ){ 

  }

  ngOnInit(): void {

    this.fetchNavigation();

    this.userAuthenticated = this.authService.confirmUserAuthentication();
    
    console.log("User Authenticated ", this.userAuthenticated);

    if(localStorage.getItem('permissions') !== "null" || localStorage.getItem('permissions') !== ""){

      this.permissions = localStorage.getItem("permissions");

    }

  }

  fetchNavigation(){

    let localeValue = $localize.locale?.toString();
    
    this.authService.fetchHeaderNavigation( localeValue ).subscribe((data) =>{
      
      if(data !== "" || data != null){

        this.navigation = data;

      }
      

    },(error) => {


    })

  }

}
