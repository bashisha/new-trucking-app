import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { FreightsPage } from './freights';
import { FreightsPageRoutingModule } from './freights-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FreightsPageRoutingModule
  ],
  declarations: [FreightsPage],
})
export class FreightsModule { }
