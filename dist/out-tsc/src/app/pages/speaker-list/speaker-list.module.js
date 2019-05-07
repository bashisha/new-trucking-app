import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SpeakerListPage } from './speaker-list';
import { SpeakerListPageRoutingModule } from './speaker-list-routing.module';
var SpeakerListModule = /** @class */ (function () {
    function SpeakerListModule() {
    }
    SpeakerListModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                IonicModule,
                SpeakerListPageRoutingModule
            ],
            declarations: [SpeakerListPage],
        })
    ], SpeakerListModule);
    return SpeakerListModule;
}());
export { SpeakerListModule };
//# sourceMappingURL=speaker-list.module.js.map