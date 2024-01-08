import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-processor',
  templateUrl: './processor.component.html',
  styleUrls: ['./processor.component.scss']
})
export class ProcessorComponent implements OnInit {

  @Input() processingText:string = 'Processing';
  @Input() diameter:number = 100;
  @Input() strokeWidth:number = 3;

  ngOnInit():void{


  }



}
