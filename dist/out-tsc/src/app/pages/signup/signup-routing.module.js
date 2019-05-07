import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SignupPage } from './signup';
var routes = [
    {
        path: '',
        component: SignupPage
    }
];
var SignupPageRoutingModule = /** @class */ (function () {
    function SignupPageRoutingModule() {
    }
    SignupPageRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], SignupPageRoutingModule);
    return SignupPageRoutingModule;
}());
export { SignupPageRoutingModule };
//# sourceMappingURL=signup-routing.module.js.map