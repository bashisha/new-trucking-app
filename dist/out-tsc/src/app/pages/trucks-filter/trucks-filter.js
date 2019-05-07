import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TrucksService } from '../../providers/trucks-service';
var TrucksFilterPage = /** @class */ (function () {
    function TrucksFilterPage(trucksService, modalCtrl) {
        this.trucksService = trucksService;
        this.modalCtrl = modalCtrl;
        this.tracks = [];
    }
    // TODO use the ionViewDidEnter event
    TrucksFilterPage.prototype.ngAfterViewInit = function () {
        // passed in array of track names that should be excluded (unchecked)
        var excludedTrackNames = []; // this.navParams.data.excludedTracks;
        // this.trucksService.getTrucks2().subscribe((trackNames: string[]) => {
        //   trackNames.forEach(trackName => {
        //     this.tracks.push({
        //       name: trackName,
        //       isChecked: (excludedTrackNames.indexOf(trackName) === -1)
        //     });
        //   });
        // });
    };
    TrucksFilterPage.prototype.resetFilters = function () {
        // reset all of the toggles to be checked
        this.tracks.forEach(function (track) {
            track.isChecked = true;
        });
    };
    TrucksFilterPage.prototype.applyFilters = function () {
        // Pass back a new array of track names to exclude
        var excludedTrackNames = this.tracks.filter(function (c) { return !c.isChecked; }).map(function (c) { return c.name; });
        this.dismiss(excludedTrackNames);
    };
    TrucksFilterPage.prototype.dismiss = function (data) {
        // using the injected ModalController this page
        // can "dismiss" itself and pass back data
        this.modalCtrl.dismiss(data);
    };
    TrucksFilterPage = tslib_1.__decorate([
        Component({
            selector: 'page-trucks-filter',
            templateUrl: 'trucks-filter.html',
            styleUrls: ['./trucks-filter.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [TrucksService,
            ModalController])
    ], TrucksFilterPage);
    return TrucksFilterPage;
}());
export { TrucksFilterPage };
//# sourceMappingURL=trucks-filter.js.map