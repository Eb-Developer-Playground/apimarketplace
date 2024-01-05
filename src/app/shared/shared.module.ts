import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccordionComponent } from '../components/accordion/accordion.component';
import { DebitcardComponent } from '../components/cards/debitcard/debitcard.component';
import { DynamicnavigationComponent } from './dynamicnavigation/dynamicnavigation.component';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    AccordionComponent,
    DebitcardComponent,
    DynamicnavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
  exports:[
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    AccordionComponent,
    DebitcardComponent,
    DynamicnavigationComponent,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    MatIconModule
  ]
})
export class SharedModule { }
