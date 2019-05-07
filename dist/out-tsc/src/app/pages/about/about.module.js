import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AboutPage } from './about';
import { PopoverPage } from '../about-popover/about-popover';
import { AboutPageRoutingModule } from './about-routing.module';
var AboutModule = /** @class */ (function () {
    function AboutModule() {
    }
    AboutModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                AboutPageRoutingModule
            ],
            declarations: [AboutPage, PopoverPage],
            entryComponents: [PopoverPage],
            bootstrap: [AboutPage],
        })
    ], AboutModule);
    return AboutModule;
}());
export { AboutModule };
//# sourceMappingURL=about.module.js.map