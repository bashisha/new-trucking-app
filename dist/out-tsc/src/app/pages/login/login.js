import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from '../../providers/user-data';
var LoginPage = /** @class */ (function () {
    function LoginPage(userData, router) {
        this.userData = userData;
        this.router = router;
        this.login = { username: '', password: '' };
        this.submitted = false;
    }
    LoginPage.prototype.onLogin = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.userData.login(this.login.username);
            this.router.navigateByUrl('/app/tabs/schedule');
        }
    };
    LoginPage.prototype.onSignup = function () {
        this.router.navigateByUrl('/signup');
    };
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'page-login',
            templateUrl: 'login.html',
            styleUrls: ['./login.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [UserData,
            Router])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.js.map