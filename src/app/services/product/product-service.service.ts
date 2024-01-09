import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) { }

  getApiProducts(locale:any){

    console.log("From fetch product",locale);

    switch(locale){

      case 'fr' :

        return this.http.get('./assets/data/api/apilist.fr.json');

      break;

      case 'de' :

        return this.http.get('./assets/data/api/apilist.de.json');

      break;

      default : 

        return this.http.get('./assets/data/api/apilist.json');

      break;
      


    }

    
  }

  // getProducts() : Observable<any[]>{
  //   const headers = this.getHeaders();
  //   return this.http.get<any[]>(`${this.apiUrl}/products`, { headers });
  // }

  // getProductDetailById(id : number){
  //   const headers = this.getHeaders();
  //   return this.http.get(`${this.apiUrl}/products/` + id, { headers })
  // }
}
