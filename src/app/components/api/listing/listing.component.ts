import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit{

  @Input() title:string = '';
  @Input() description:string = '';
  @Input() routeLink:string ='';
  @Input() stylingClass:string = 'one_quarter';

  constructor(){

  }

  ngOnInit(): void {
    
  }

  
}
