import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebarcomponent',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  navigation:any = [
    {
      title:"Home",
      routerLink:"home",
      permission:"can_view_home",
    },
    {
      title:"Accounts",
      routerLink:"accounts",
      permission:"can_view_accounts",
    },
    {
      title:"Transact",
      routerLink:"transact",
      permission:"can_view_transactions",
    },
    {
      title:"Borrow",
      routerLink:"borrow",
      permission:"can_view_borrow",
    },
    {
      title:"Save",
      routerLink:"save",
      permission:"can_view_save",
    },
    {
      title:"Insure",
      routerLink:"insure",
      permission:"can_view_insure",
    },
    {
      title:"Settings & Language",
      routerLink:"settings",
      permission:"can_view_settings",
    },
    {
      title:"Language",
      routerLink:"settings",
      permission:"can_view_settings",
    },
    {
      title:"Signrout",
      routerLink:"auth",
      permission:"",
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
