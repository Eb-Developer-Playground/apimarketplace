import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation:ViewEncapsulation.Emulated
})
export class SidebarLayoutComponent implements OnInit {

  constructor() { }

  
  // 

  permissions:any = [
    'can_view_home',
    'can_view_accounts',
    'can_view_transactions',
    'can_view_borrow',
    'can_view_settings',
    'can_view_borrow',
    'can_view_save',
    'can_view_insure'
  ];

  ngOnInit(): void {

    localStorage.setItem('permissions',JSON.stringify(this.permissions));

  }

}
