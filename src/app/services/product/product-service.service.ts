import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) { }

  getProduct(productId:string){

    //return this.http.get();

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
