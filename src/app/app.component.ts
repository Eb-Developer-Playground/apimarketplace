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

    localStorage.setItem('permissions',JSON.stringify([""]));

  }
}
