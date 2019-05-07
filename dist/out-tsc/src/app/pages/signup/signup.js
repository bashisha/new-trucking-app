import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from '../../providers/user-data';
var SignupPage = /** @class */ (function () {
    function SignupPage(router, userData) {
        this.router = router;
        this.userData = userData;
        this.signup = { username: '', password: '' };
        this.submitted = false;
    }
    SignupPage.prototype.onSignup = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.userData.signup(this.signup.username);
            this.router.navigateByUrl('/app/tabs/schedule');
        }
    };
    SignupPage = tslib_1.__decorate([
        Component({
            selector: 'page-signup',
            templateUrl: 'signup.html',
            styleUrls: ['./signup.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            UserData])
    ], SignupPage);
    return SignupPage;
}());
export { SignupPage };
//# sourceMappingURL=signup.js.map