import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserData } from './user-data';
//import {  RequestOptions } from 'http';
import { Http, Headers } from '@angular/http';
var TrucksService = /** @class */ (function () {
    function TrucksService(http, user) {
        this.http = http;
        this.user = user;
        this.baseUrl = 'http://localhost:18105/api';
        this._options = null;
    }
    TrucksService.prototype.load = function () {
        if (this.data) {
            return of(this.data);
        }
        else {
            return this.http
                .get('assets/data/data.json')
                .pipe(map(this.getTrucks, this));
        }
    };
    TrucksService.prototype.getTrucks2 = function () {
        var _this = this;
        var corsHeaders = new Headers();
        corsHeaders.append('Access-Control-Allow-Origin', '*');
        corsHeaders.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        return this.http.get(this.baseUrl + "/trucks", { headers: corsHeaders })
            .pipe(map(function (response) {
            _this.data = response.json();
            return _this.data;
        }))
            .pipe(catchError(this.handleError('getTrucks', [])));
    };
    TrucksService.prototype.getTrucks = function () {
        return this.load().pipe(map(function (data) {
            return data.speakers.sort(function (a, b) {
                var aName = a.name.split(' ').pop();
                var bName = b.name.split(' ').pop();
                return aName.localeCompare(bName);
            });
        }));
    };
    TrucksService.prototype.getTracks = function () {
        return this.load().pipe(map(function (data) {
            return data.tracks.sort();
        }));
    };
    TrucksService.prototype.getMap = function () {
        return this.load().pipe(map(function (data) {
            return data.map;
        }));
    };
    TrucksService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            //this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return of(result);
        };
    };
    TrucksService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Http, UserData])
    ], TrucksService);
    return TrucksService;
}());
export { TrucksService };
//# sourceMappingURL=trucks-service.js.map