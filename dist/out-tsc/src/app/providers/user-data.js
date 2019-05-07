import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';
var UserData = /** @class */ (function () {
    function UserData(events, storage) {
        this.events = events;
        this.storage = storage;
        this._favorites = [];
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        this.HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
    }
    UserData.prototype.hasFavorite = function (sessionName) {
        return (this._favorites.indexOf(sessionName) > -1);
    };
    UserData.prototype.addFavorite = function (sessionName) {
        this._favorites.push(sessionName);
    };
    UserData.prototype.removeFavorite = function (sessionName) {
        var index = this._favorites.indexOf(sessionName);
        if (index > -1) {
            this._favorites.splice(index, 1);
        }
    };
    UserData.prototype.login = function (username) {
        var _this = this;
        return this.storage.set(this.HAS_LOGGED_IN, true).then(function () {
            _this.setUsername(username);
            return _this.events.publish('user:login');
        });
    };
    UserData.prototype.signup = function (username) {
        var _this = this;
        return this.storage.set(this.HAS_LOGGED_IN, true).then(function () {
            _this.setUsername(username);
            return _this.events.publish('user:signup');
        });
    };
    UserData.prototype.logout = function () {
        var _this = this;
        return this.storage.remove(this.HAS_LOGGED_IN).then(function () {
            return _this.storage.remove('username');
        }).then(function () {
            _this.events.publish('user:logout');
        });
    };
    UserData.prototype.setUsername = function (username) {
        return this.storage.set('username', username);
    };
    UserData.prototype.getUsername = function () {
        return this.storage.get('username').then(function (value) {
            return value;
        });
    };
    UserData.prototype.isLoggedIn = function () {
        return this.storage.get(this.HAS_LOGGED_IN).then(function (value) {
            return value === true;
        });
    };
    UserData.prototype.checkHasSeenTutorial = function () {
        return this.storage.get(this.HAS_SEEN_TUTORIAL).then(function (value) {
            return value;
        });
    };
    UserData = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Events,
            Storage])
    ], UserData);
    return UserData;
}());
export { UserData };
//# sourceMappingURL=user-data.js.map