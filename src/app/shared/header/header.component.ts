import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navigation:any = [
    {
      title:"Home",
      routerLink:"home",
      permission:"can_view_home",
    },
    {
      title:"Catalogue",
      routerLink:"catalogue",
      permission:"can_view_accounts",
    },
    {
      title:"Usage",
      routerLink:"catalogue",
      permission:"can_view_accounts",
    },
    {
      title:"Key Management",
      routerLink:"catalogue",
      permission:"can_view_accounts",
    },
    {
      title:"Settings & Language",
      routerLink:"settings",
      permission:"can_view_settings",
    },
    {
      title:"Sign Out",
      routerLink:"auth",
      permission:"",
    }
  ];

  permissions:any;

  constructor() { }

  ngOnInit(): void {

    
    if(localStorage.getItem('permissions') !== "null" || localStorage.getItem('permissions') !== ""){

      this.permissions = localStorage.getItem("permissions");

    }

  }

}
