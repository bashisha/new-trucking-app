import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MapPage } from './map';
import { MapPageRoutingModule } from './map-routing.module';
var MapModule = /** @class */ (function () {
    function MapModule() {
    }
    MapModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                IonicModule,
                MapPageRoutingModule
            ],
            declarations: [
                MapPage,
            ]
        })
    ], MapModule);
    return MapModule;
}());
export { MapModule };
//# sourceMappingURL=map.module.js.map