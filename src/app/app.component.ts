import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sample2';

  constructor(){

    console.log($localize.locale);

    localStorage.setItem('permissions',JSON.stringify([""]));

  }
}
