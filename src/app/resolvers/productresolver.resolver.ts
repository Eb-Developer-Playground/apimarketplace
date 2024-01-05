import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductServiceService } from '../services/product/product-service.service';

@Injectable({
  providedIn: 'root'
})
export class ProductresolverResolver implements Resolve<boolean> {

  // private service: ProductService,

  constructor(
    private router: Router,
    private service: ProductServiceService
  ) {}


  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>{
    // const productId= this.route.snapshot.paramMap.get('productId');

    // this.service
    //   .getProduct(productId)
    //   .catch(errorResponse => this.handleError(errorResponse);
  
    return of(true);

  }

  // handleError(
  //   errorResponse: HTTPErrorResponse
  // ) {
  //   switch (errorResponse.status) {
  //     case 404:
  //       this.router.navigate(['/not-found']);
  //       return Observable.of(null);
  //     case 403:
  //       this.router.navigate(['/unauthorized']);
  //       return Observable.of(null);
  //     default:
  //       this.router.navigate(['/error']);
  //       return Observable.of(null);
  //     }
  //   }
}
