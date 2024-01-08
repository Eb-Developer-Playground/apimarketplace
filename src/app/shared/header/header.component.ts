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

  permissions:any;

  constructor(
    private authService:AuthServiceService
  ){ 

  }

  ngOnInit(): void {

    this.authService.fetchHeaderNavigation().subscribe((data) =>{
      if(data !== "" || data != null){

        this.navigation = data;

      }
      

    },(error) => {


    })

    
    if(localStorage.getItem('permissions') !== "null" || localStorage.getItem('permissions') !== ""){

      this.permissions = localStorage.getItem("permissions");

    }

  }

}
