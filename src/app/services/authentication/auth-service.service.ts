import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AdminRoles } from 'src/app/models/roles/admin.model';
import { GeneralUserRoles } from 'src/app/models/roles/generaluser.model';
import { RegisteredUserRoles } from 'src/app/models/roles/registereduser.model'

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private isAuthenticated:boolean = false;
  private authSecretKey:string = 'Bearer Token';

  private superAdminPermissions:any = {};

  private registeredCustomerPermissions:any = {};

  private generalUserPermissions:any = {};

  constructor(private http:HttpClient) { 

    this.isAuthenticated = !!localStorage.getItem(this.authSecretKey);
    this.superAdminPermissions = new AdminRoles();
    this.registeredCustomerPermissions = new RegisteredUserRoles();
    this.generalUserPermissions = new GeneralUserRoles();

    localStorage.setItem('permissions',JSON.stringify(this.generalUserPermissions.permissions));


  }

  fetchHeaderNavigation(){

    return this.http.get('./assets/data/navigation/navigation.json');

  }

  fetchUserPermissions(){

    return localStorage.getItem('permissions');

  }
  
  login(username: string, password: string): boolean {

    if (username === 'superadmin' && password === 'pass123') {
      
      localStorage.setItem("role",'superadmin');
      localStorage.setItem('permissions',JSON.stringify(this.superAdminPermissions.permissions));

      this.isAuthenticated = true;

      return true;

    } else if(username == 'registered' && password =='pass123') {

      localStorage.setItem("role",'registered');
      localStorage.setItem('permissions',JSON.stringify(this.registeredCustomerPermissions.permissions));

      return true;

    }else if(username == 'general' && password == 'pass123'){
      
      localStorage.setItem("role",'general');
      //localStorage.setItem('permissions',JSON.stringify(generalUserPermissions));

      return true;

    }else{

      return false;

    }

  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  logout(): void {

    localStorage.removeItem(this.authSecretKey);
    this.isAuthenticated = false;

  }
}
