import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';
import { AboutModule } from '../about/about.module';
import { TrucksModule } from '../trucks/trucks.module';
import { SpeakerListModule } from '../speaker-list/speaker-list.module';
var TabsModule = /** @class */ (function () {
    function TabsModule() {
    }
    TabsModule = tslib_1.__decorate([
        NgModule({
            imports: [
                AboutModule,
                CommonModule,
                IonicModule,
                TrucksModule,
                SpeakerListModule,
                TabsPageRoutingModule
            ],
            declarations: [
                TabsPage,
            ]
        })
    ], TabsModule);
    return TabsModule;
}());
export { TabsModule };
//# sourceMappingURL=tabs-page.module.js.map