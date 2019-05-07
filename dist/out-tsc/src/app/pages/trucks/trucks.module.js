import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TrucksPage } from './trucks';
import { TrucksFilterPage } from '../trucks-filter/trucks-filter';
import { SchedulePageRoutingModule } from './trucks-routing.module';
var TrucksModule = /** @class */ (function () {
    function TrucksModule() {
    }
    TrucksModule = tslib_1.__decorate([
        NgModule({
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
    ], TrucksModule);
    return TrucksModule;
}());
export { TrucksModule };
//# sourceMappingURL=trucks.module.js.map