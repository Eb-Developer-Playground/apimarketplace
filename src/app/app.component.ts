import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Api Market Place';

  constructor(){

    console.log($localize.locale);

    if(!localStorage.getItem('permissions')){
      
      console.log("No permissions exist in local storage creating");

      localStorage.setItem('permissions',JSON.stringify([""]));

    }
    

  }
}
