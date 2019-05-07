import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MapPage } from './map';
var routes = [
    {
        path: '',
        component: MapPage
    }
];
var MapPageRoutingModule = /** @class */ (function () {
    function MapPageRoutingModule() {
    }
    MapPageRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], MapPageRoutingModule);
    return MapPageRoutingModule;
}());
export { MapPageRoutingModule };
//# sourceMappingURL=map-routing.module.js.map