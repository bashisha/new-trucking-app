import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { TrucksFilterPage } from '../trucks-filter/trucks-filter';
import { TrucksService } from '../../providers/trucks-service';
import { UserData } from '../../providers/user-data';
var TrucksPage = /** @class */ (function () {
    function TrucksPage(alertCtrl, loadingCtrl, modalCtrl, router, toastCtrl, user, truckService) {
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.user = user;
        this.truckService = truckService;
        this.dayIndex = 0;
        this.queryText = '';
        this.segment = 'all';
        this.excludeTracks = [];
        this.shownSessions = [];
        this.groups = [];
    }
    TrucksPage.prototype.ngOnInit = function () {
        // this.app.setTitle('Schedule');
        this.updateSchedule();
    };
    TrucksPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewDidLoad Trucks', this.trucks);
        this.PresentLoader();
    };
    TrucksPage.prototype.PresentLoader = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var loader;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Getting data...'
                        })];
                    case 1:
                        loader = _a.sent();
                        loader.present().then(function () {
                            _this.truckService.getTrucks2().subscribe(function (data) {
                                _this.trucks = data;
                                // this.allTruckDivisions =
                                //   _.chain(data)
                                //     .groupBy('currentCity')
                                //     .toPairs()
                                //     //.map(item => _.zipObject(['divisionName', 'divisionTeams'], item))
                                //     .value();
                                // this.trucks = this.allTruckDivisions;
                                // console.log('division trucks', this.allTruckDivisions);
                                console.log(_this.trucks);
                                loader.dismiss();
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    TrucksPage.prototype.updateSchedule = function () {
        // Close any open sliding items when the schedule updates
        if (this.scheduleList) {
            this.scheduleList.closeSlidingItems();
        }
        /*     this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe((data: any) => {
              this.shownSessions = data.shownSessions;
              this.groups = data.groups;
            }); */
    };
    TrucksPage.prototype.presentFilter = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal, data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: TrucksFilterPage,
                            componentProps: { excludedTracks: this.excludeTracks }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onWillDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        if (data) {
                            this.excludeTracks = data;
                            this.updateSchedule();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TrucksPage.prototype.addFavorite = function (slidingItem, sessionData) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.user.hasFavorite(sessionData.name)) return [3 /*break*/, 1];
                        // woops, they already favorited it! What shall we do!?
                        // prompt them to remove it
                        this.removeFavorite(slidingItem, sessionData, 'Favorite already added');
                        return [3 /*break*/, 4];
                    case 1:
                        // remember this session as a user favorite
                        this.user.addFavorite(sessionData.name);
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: 'Favorite Added',
                                buttons: [{
                                        text: 'OK',
                                        handler: function () {
                                            // close the sliding item
                                            slidingItem.close();
                                        }
                                    }]
                            })];
                    case 2:
                        alert_1 = _a.sent();
                        // now present the alert on top of all other content
                        return [4 /*yield*/, alert_1.present()];
                    case 3:
                        // now present the alert on top of all other content
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TrucksPage.prototype.removeFavorite = function (slidingItem, sessionData, title) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: title,
                            message: 'Would you like to remove this session from your favorites?',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    handler: function () {
                                        // they clicked the cancel button, do not remove the session
                                        // close the sliding item and hide the option buttons
                                        slidingItem.close();
                                    }
                                },
                                {
                                    text: 'Remove',
                                    handler: function () {
                                        // they want to remove this session from their favorites
                                        _this.user.removeFavorite(sessionData.name);
                                        _this.updateSchedule();
                                        // close the sliding item and hide the option buttons
                                        slidingItem.close();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        // now present the alert on top of all other content
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        // now present the alert on top of all other content
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TrucksPage.prototype.openSocial = function (network, fab) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var loading;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: "Posting to " + network,
                            duration: (Math.random() * 1000) + 500
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, loading.onWillDismiss()];
                    case 3:
                        _a.sent();
                        fab.close();
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib_1.__decorate([
        ViewChild('scheduleList'),
        tslib_1.__metadata("design:type", IonList)
    ], TrucksPage.prototype, "scheduleList", void 0);
    TrucksPage = tslib_1.__decorate([
        Component({
            selector: 'page-trucks',
            templateUrl: 'trucks.html',
            styleUrls: ['./trucks.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AlertController,
            LoadingController,
            ModalController,
            Router,
            ToastController,
            UserData,
            TrucksService])
    ], TrucksPage);
    return TrucksPage;
}());
export { TrucksPage };
//# sourceMappingURL=trucks.js.map