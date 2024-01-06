import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit{

  @Input() title:string = '';
  @Input() image:string = '';
  @Input() description:string = '';
  @Input() routeLink:string ='';
  @Input() stylingClass:string = 'one_quarter';
  @Input() trialdetails:string = '';
  @Input() pricing:string = '';
  constructor(){

  }

  ngOnInit(): void {
    
  }

  
}
