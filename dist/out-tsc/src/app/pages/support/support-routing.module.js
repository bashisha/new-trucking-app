import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SupportPage } from './support';
var routes = [
    {
        path: '',
        component: SupportPage
    }
];
var SupportPageRoutingModule = /** @class */ (function () {
    function SupportPageRoutingModule() {
    }
    SupportPageRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], SupportPageRoutingModule);
    return SupportPageRoutingModule;
}());
export { SupportPageRoutingModule };
//# sourceMappingURL=support-routing.module.js.map