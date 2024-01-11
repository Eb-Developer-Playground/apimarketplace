import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../../../../src/app/services/authentication/auth-service.service';

@Injectable({
  providedIn: 'root',
})
export class RoleguardGuard implements CanActivate {

  constructor(
    private authService:AuthServiceService,
    private router:Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let permissionArray = this.authService.fetchUserPermissions();

      let permission = route.data.permission;

      if(this.authService.confirmUserAuthentication() && permissionArray?.includes(permission)){

        console.log("This is a valid router and can be accessed by ",permission);
        return true;

      }else{

        this.router.navigate(['/home']);

        return false;

      }
 

  }
  
}
