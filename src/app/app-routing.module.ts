import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Page Layout Components
import { HeaderfooterComponent } from './layout/headerfooter/headerfooter.component';
import { FullwidthComponent } from './layout/fullwidth/fullwidth.component';
import { SidebarLayoutComponent } from './layout/sidebar/sidebar.component';

// Public View Components
import { HomeComponent } from './views/home/home.component';

// Authentication View Components
import { CreateaccountComponent } from './views/auth/createaccount/createaccount.component';
import { LoginComponent } from './views/auth/login/login.component';
import { LogoutComponent } from './views/auth/logout/logout.component';
import { ResetpasswordComponent } from './views/auth/resetpassword/resetpassword.component';


// Generic View Pages

import { ApiCataloguComponent } from './views/api/apicatalogue.component';

import { SettingsComponent } from './views/settings/settings.component';


const routes: Routes = [
  {
    path:"",
    component:SidebarLayoutComponent,
    children:[
      {
        path:"home",
        component:HomeComponent,
        title:"Home Page"
      },{
        path:"catalogue",
        component:ApiCataloguComponent,
        title:"Api Cataglogue"
      },{
        path:"settings",
        component:SettingsComponent,
        title:"Settings Page"
      },{
        path:"",
        redirectTo:"/home",
        pathMatch: 'full'
      }
    ]
  },
  {
    path:"auth",
    component:FullwidthComponent,
    title:"Authentication",
    children:[
      {
        path:"",
        component:LoginComponent,
        title:"Login"
      },{
        path:"createaccount",
        component:CreateaccountComponent,
        title:"Create Account",
      },{
        path:"login",
        component:LoginComponent
      },{
        path:"logout",
        component:LogoutComponent
      },{
        path:"resetpassword",
        component:ResetpasswordComponent
      }
    ]
  }
];

// The first route of any parent component with a different layout, set the router-outlet as a tag to this.
const lazyLoadedRoutes = [

  {
    path:"",
    component:HeaderfooterComponent,
    children:[

      {
        path:"",
        loadChildren:() => import('./modules/public/public.module').then( m => m.PublicModule)
      }
    ]
  }
]

/* Path that has a resolver implimented to handle 
  {
        path: 'some-segment/:productId',
        component: ProductComponent,
        canActivate: [CanActivateGuard],
        resolve: {
            product: ProductResolver
        }
    },
*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
