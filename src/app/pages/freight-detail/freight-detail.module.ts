import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreightDetailPage } from './freight-detail';
import { FreightDetailPageRoutingModule } from './freight-detail-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FreightDetailPageRoutingModule
  ],
  declarations: [
    FreightDetailPage,
  ]
})
export class FreightDetailModule { }
