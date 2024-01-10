import { Component, OnInit } from '@angular/core';

// Import product service to enable product fetch
import { ProductServiceService } from 'src/app/services/product/product-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[
    ProductServiceService
  ]
})

export class HomeComponent implements OnInit {

  // Property declarations
  apiListing:any = [];
  loading:boolean = true;

  constructor(
    private productService:ProductServiceService
  ) { 


  }

  ngOnInit(): void {

    // On initialisation fetch all api listings for this view
    this.fetchApiListing();

  }

  fetchApiListing(){

    this.productService.getApiProducts($localize.locale).subscribe((data) => {


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
