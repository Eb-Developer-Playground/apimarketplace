import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamicnavigation',
  templateUrl: './dynamicnavigation.component.html',
  styleUrls: ['./dynamicnavigation.component.scss']
})
export class DynamicnavigationComponent implements OnInit {

  @Input() navigationItems:any = [];
  @Input() permissionList:any = [];
  @Input() layout:string = "horizontal";

  constructor() { }

  ngOnInit(): void {

  }

}
