import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-debitcard',
  templateUrl: './debitcard.component.html',
  styleUrls: ['./debitcard.component.scss']
})

export class DebitcardComponent implements OnInit {

  @Input() accountNumber:string = "";
  @Input() accountType: string = "";
  @Input() balance:number = 0;
  @Input() cardType:string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
