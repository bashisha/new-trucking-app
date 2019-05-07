import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutPage } from './about';
var routes = [
    {
        path: '',
        component: AboutPage
    }
];
var AboutPageRoutingModule = /** @class */ (function () {
    function AboutPageRoutingModule() {
    }
    AboutPageRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], AboutPageRoutingModule);
    return AboutPageRoutingModule;
}());
export { AboutPageRoutingModule };
//# sourceMappingURL=about-routing.module.js.map