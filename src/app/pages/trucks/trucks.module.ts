import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TrucksPage } from './trucks';
import { TrucksFilterPage } from '../trucks-filter/trucks-filter';
import { SchedulePageRoutingModule } from './trucks-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchedulePageRoutingModule
  ],
  declarations: [
    TrucksPage,
    TrucksFilterPage
  ],
  entryComponents: [
    TrucksFilterPage
  ]
})
export class TrucksModule { }
