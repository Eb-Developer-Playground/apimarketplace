import { Component, OnInit } from '@angular/core';

// Import product service to enable product fetch
import { ProductServiceService } from 'src/app/services/product/product-service.service';

// Add product service provider to providers array
@Component({
  selector: 'app-apicatalogue',
  templateUrl: './apicatalogue.component.html',
  styleUrls: ['./apicatalogue.component.scss'],
  providers:[
    ProductServiceService
  ]
})
export class ApiCataloguComponent implements OnInit {

  // Property declarations
  apiListing:any = [];
  loading:boolean = true;

  // Instanciate all services and import instances to allow for Dependancy Injection
  constructor(
    private productService:ProductServiceService
  ) { 


  }

  ngOnInit(): void {

    // On initialisation fetch all api listings for this view
    this.fetchApiListing();

  }

  fetchApiListing(){

    this.productService.getApiProducts().subscribe((data) => {

      console.log("Response succesful",data);

      if(data !== ""){

        this.apiListing = data;
        this.loading = false;
        
      }

    },(error) =>{

      console.log("Error handling ", error);
      // Handle Error here
      this.loading = false;

    });
  }

}
