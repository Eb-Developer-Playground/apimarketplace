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
import { ListingComponent } from '../components/api/listing/listing.component';

import { ProcessorComponent } from './processor/processor.component';

import {MatTabsModule} from '@angular/material/tabs';

import { NgChartsModule } from 'ng2-charts';




@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    AccordionComponent,
    DebitcardComponent,
    DynamicnavigationComponent,
    ListingComponent,
    ProcessorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatTabsModule,
    NgChartsModule
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
    MatIconModule,
    ListingComponent,
    ProcessorComponent,
    MatTabsModule,
    NgChartsModule
  ]
  
})
export class SharedModule { }
