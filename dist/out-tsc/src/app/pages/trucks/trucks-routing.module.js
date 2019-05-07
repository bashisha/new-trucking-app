import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TrucksPage } from './trucks';
var routes = [
    {
        path: '',
        component: TrucksPage
    }
];
var SchedulePageRoutingModule = /** @class */ (function () {
    function SchedulePageRoutingModule() {
    }
    SchedulePageRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], SchedulePageRoutingModule);
    return SchedulePageRoutingModule;
}());
export { SchedulePageRoutingModule };
//# sourceMappingURL=trucks-routing.module.js.map