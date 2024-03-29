import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AdminRoles } from '../../models/roles/admin.model';
import { GeneralUserRoles } from '../../models/roles/generaluser.model';
import { RegisteredUserRoles } from '../../models/roles/registereduser.model';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private isAuthenticated:boolean = false;
  private authSecretKey:string = 'Bearer Token';

  private superAdminPermissions:any = {};

  private registeredCustomerPermissions:any = {};

  private generalUserPermissions:any = {};

  constructor(
    private http:HttpClient,
    private router:Router
  ) { 

    this.isAuthenticated = !!localStorage.getItem('authenticated');
    this.superAdminPermissions = new AdminRoles();
    this.registeredCustomerPermissions = new RegisteredUserRoles();
    this.generalUserPermissions = new GeneralUserRoles();

    //localStorage.setItem('permissions',JSON.stringify(this.generalUserPermissions.permissions));


  }

  fetchHeaderNavigation(local:any){

    console.log(local , " From Fetch header");

    switch(local){

      case 'fr' :

        return this.http.get('./assets/data/navigation/navigation.fr.json');

      break;

      case 'de' :

        return this.http.get('./assets/data/navigation/navigation.de.json');

      break;

      default : 

        return this.http.get('./assets/data/navigation/navigation.json');

      break;
      


    }

    
  }

  fetchUserPermissions(){

    if(localStorage.getItem('permissions') !== null || localStorage.getItem('permissions') !== ''){

      return localStorage.getItem('permissions');

    }else{

      return [''];
      
    }
    

  }
  
  login(formData:any): boolean {

    if (formData?.userName === 'johnakello' && formData?.password === 'pass123') {
      
      localStorage.setItem("role",'superadmin');
      localStorage.setItem('authenticated','true');
      localStorage.removeItem('permissions');
      localStorage.setItem('permissions',JSON.stringify(this.superAdminPermissions.permissions));

      this.isAuthenticated = true;

      return true;

    } else if(formData?.userName == 'registered' && formData?.password =='pass123') {

      localStorage.setItem("role",'registered');
      localStorage.setItem('authenticated','true');
      localStorage.setItem('permissions',JSON.stringify(this.registeredCustomerPermissions.permissions));

      return true;

    }else if(formData?.userName == 'general' && formData?.password == 'pass123'){
      
      localStorage.setItem("role",'general');
      localStorage.setItem('authenticated','true');
      localStorage.setItem('permissions',JSON.stringify(this.generalUserPermissions['permissions']));

      return true;

    }else{

      return false;

    }

  }

  confirmUserAuthentication(): boolean {

    this.isAuthenticated = !!localStorage.getItem('authenticated');

    return this.isAuthenticated;

  }

  logout(): void {

    localStorage.removeItem('authenticated');
    localStorage.removeItem('role');
    localStorage.setItem('permissions',JSON.stringify(['']));
    
    this.isAuthenticated = false;

    setTimeout(() => {

      this.router.navigate(['/auth']);

    },4000)

  }
}
