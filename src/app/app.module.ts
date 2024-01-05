import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import {HttpClientModule} from '@angular/common/http';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import {SharedModule} from './shared/shared.module';

import { AppComponent } from './app.component';

import { LoginComponent } from './views/auth/login/login.component';
import { LogoutComponent } from './views/auth/logout/logout.component';
import { HomeComponent } from './views/home/home.component';
import { FullwidthComponent } from './layout/fullwidth/fullwidth.component';
import { HeaderfooterComponent } from './layout/headerfooter/headerfooter.component';
import { SidebarLayoutComponent } from './layout/sidebar/sidebar.component';


import { JsonfilterPipe } from './pipes/jsonfilter.pipe';
import { HasrolesDirective } from './directives/hasroles.directive';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    FullwidthComponent,
    HeaderfooterComponent,
    SidebarLayoutComponent,
    JsonfilterPipe,
    HasrolesDirective
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
