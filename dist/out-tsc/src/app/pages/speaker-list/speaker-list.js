import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import { TrucksService } from '../../providers/trucks-service';
var SpeakerListPage = /** @class */ (function () {
    function SpeakerListPage(actionSheetCtrl, trucksService, inAppBrowser, router) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.trucksService = trucksService;
        this.inAppBrowser = inAppBrowser;
        this.router = router;
        this.speakers = [];
    }
    SpeakerListPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.trucksService.getTrucks().subscribe(function (speakers) {
            _this.speakers = speakers;
        });
    };
    SpeakerListPage.prototype.goToSpeakerTwitter = function (speaker) {
        this.inAppBrowser.create("https://twitter.com/" + speaker.twitter, '_blank');
    };
    SpeakerListPage.prototype.openSpeakerShare = function (speaker) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var actionSheet;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetCtrl.create({
                            header: 'Share ' + speaker.name,
                            buttons: [
                                {
                                    text: 'Copy Link',
                                    handler: function () {
                                        console.log('Copy link clicked on https://twitter.com/' + speaker.twitter);
                                        if (window['cordova'] &&
                                            window['cordova'].plugins.clipboard) {
                                            window['cordova'].plugins.clipboard.copy('https://twitter.com/' + speaker.twitter);
                                        }
                                    }
                                },
                                {
                                    text: 'Share via ...'
                                },
                                {
                                    text: 'Cancel',
                                    role: 'cancel'
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SpeakerListPage.prototype.openContact = function (speaker) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var mode, actionSheet;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mode = 'ios';
                        return [4 /*yield*/, this.actionSheetCtrl.create({
                                header: 'Contact ' + speaker.name,
                                buttons: [
                                    {
                                        text: "Email ( " + speaker.email + " )",
                                        icon: mode !== 'ios' ? 'mail' : null,
                                        handler: function () {
                                            window.open('mailto:' + speaker.email);
                                        }
                                    },
                                    {
                                        text: "Call ( " + speaker.phone + " )",
                                        icon: mode !== 'ios' ? 'call' : null,
                                        handler: function () {
                                            window.open('tel:' + speaker.phone);
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SpeakerListPage = tslib_1.__decorate([
        Component({
            selector: 'page-speaker-list',
            templateUrl: 'speaker-list.html',
            styleUrls: ['./speaker-list.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActionSheetController,
            TrucksService,
            InAppBrowser,
            Router])
    ], SpeakerListPage);
    return SpeakerListPage;
}());
export { SpeakerListPage };
//# sourceMappingURL=speaker-list.js.map