import * as tslib_1 from "tslib";
import { Component, ElementRef, ViewChild } from '@angular/core';
import { TrucksService } from '../../providers/trucks-service';
import { Platform } from '@ionic/angular';
var MapPage = /** @class */ (function () {
    function MapPage(confData, platform) {
        this.confData = confData;
        this.platform = platform;
    }
    MapPage.prototype.ngAfterViewInit = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var googleMaps;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getGoogleMaps('AIzaSyB8pf6ZdFQj5qw7rc_HSGrhUwQKfIe9ICw')];
                    case 1:
                        googleMaps = _a.sent();
                        this.confData.getMap().subscribe(function (mapData) {
                            var mapEle = _this.mapElement.nativeElement;
                            var map = new googleMaps.Map(mapEle, {
                                center: mapData.find(function (d) { return d.center; }),
                                zoom: 16
                            });
                            mapData.forEach(function (markerData) {
                                var infoWindow = new googleMaps.InfoWindow({
                                    content: "<h5>" + markerData.name + "</h5>"
                                });
                                var marker = new googleMaps.Marker({
                                    position: markerData,
                                    map: map,
                                    title: markerData.name
                                });
                                marker.addListener('click', function () {
                                    infoWindow.open(map, marker);
                                });
                            });
                            googleMaps.event.addListenerOnce(map, 'idle', function () {
                                mapEle.classList.add('show-map');
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib_1.__decorate([
        ViewChild('mapCanvas'),
        tslib_1.__metadata("design:type", ElementRef)
    ], MapPage.prototype, "mapElement", void 0);
    MapPage = tslib_1.__decorate([
        Component({
            selector: 'page-map',
            templateUrl: 'map.html',
            styleUrls: ['./map.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [TrucksService, Platform])
    ], MapPage);
    return MapPage;
}());
export { MapPage };
function getGoogleMaps(apiKey) {
    var win = window;
    var googleModule = win.google;
    if (googleModule && googleModule.maps) {
        return Promise.resolve(googleModule.maps);
    }
    return new Promise(function (resolve, reject) {
        var script = document.createElement('script');
        script.src = "https://maps.googleapis.com/maps/api/js?key=" + apiKey + "&v=3.31";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        script.onload = function () {
            var googleModule2 = win.google;
            if (googleModule2 && googleModule2.maps) {
                resolve(googleModule2.maps);
            }
            else {
                reject('google maps not available');
            }
        };
    });
}
//# sourceMappingURL=map.js.map