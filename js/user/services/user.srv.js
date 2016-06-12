"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
///<reference path="../../../node_modules/rxjs/Observable.d.ts"/>
/**
 * Created by serrut on 08/06/16.
 */
var Observable_1 = require('rxjs/Observable');
var core_1 = require('@angular/core');
var user_impl_1 = require('../models/user.impl');
var UserService = (function () {
    function UserService() {
        this._myFirebaseRef = new Firebase("https://radiant-inferno-6600.firebaseio.com/");
    }
    UserService.prototype.getUser = function () {
        var _this = this;
        return new Observable_1.Observable(function (observable) {
            _this._myFirebaseRef.onAuth(function (authData) {
                var user;
                if (authData) {
                    user = new user_impl_1.UserImp(authData);
                }
                observable.next(user);
            });
        });
    };
    UserService.prototype.login = function (email, password) {
        var _this = this;
        return new Observable_1.Observable(function (observable) {
            _this._myFirebaseRef.authWithPassword({
                email: email,
                password: password
            }, function (error, authData) {
                if (error) {
                    observable.error(error);
                }
                else {
                    observable.next(new user_impl_1.UserImp(authData));
                }
            });
        });
    };
    UserService.prototype.register = function (email, password) {
        var _this = this;
        return new Observable_1.Observable(function (observable) {
            _this._myFirebaseRef.createUser({
                email: email,
                password: password
            }, function (error, userData) {
                if (error) {
                    observable.error(error);
                }
                else {
                    _this.login(email, password)
                        .subscribe(function (user) {
                        observable.next(user);
                    });
                }
            });
        });
    };
    UserService.prototype.logout = function () {
        var _this = this;
        return new Observable_1.Observable(function (observable) {
            _this._myFirebaseRef.unauth();
            observable.next();
        });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.srv.js.map