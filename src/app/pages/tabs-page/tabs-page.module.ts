import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';

import { AboutModule } from '../about/about.module';
import { TrucksModule } from '../trucks/trucks.module';
import { FreightsModule } from '../freights/freights.module';

@NgModule({
  imports: [
    AboutModule,
    CommonModule,
    IonicModule,
    TrucksModule,
    FreightsModule,
    TabsPageRoutingModule
  ],
  declarations: [
    TabsPage,
  ]
})
export class TabsModule { }
