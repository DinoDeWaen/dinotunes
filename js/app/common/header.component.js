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
/**
 * Created by serrut on 05/06/16.
 */
var core_1 = require('@angular/core');
var search_component_1 = require("./search.component");
var router_1 = require('@angular/router');
var user_srv_1 = require("../user/services/user.srv");
var HeaderComponent = (function () {
    function HeaderComponent(userService, router) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.userService.getUser()
            .subscribe(function (user) {
            _this.user = user;
        });
    }
    HeaderComponent.prototype.search = function ($event) {
        this.router.navigate(["/albums", { query: $event }]);
    };
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function () {
            _this.router.navigateByUrl("/");
        });
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'header-component',
            template: "\n        <nav class=\"navbar navbar-inverse\">\n          <div class=\"container-fluid\">\n            <!-- Brand and toggle get grouped for better mobile display -->\n            <div class=\"navbar-header\">\n              <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n              </button>\n              <a class=\"navbar-brand\" href=\"#\">MyTunes</a>\n            </div>\n\n            <!-- Collect the nav links, forms, and other content for toggling -->\n            <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n              <form class=\"navbar-form navbar-left\" role=\"search\">\n                <search-component (searchChange)=\"search($event)\"></search-component>\n              </form>\n              <ul class=\"nav navbar-nav navbar-right\">\n                <li><a type=\"button\" class=\"btn btn-info navbar-btn\"    *ngIf=\"!user\" [routerLink]=\"['/login']\">Login</a></li>\n                <li><a type=\"button\" class=\"btn btn-success navbar-btn\" *ngIf=\"!user\" [routerLink]=\"['/registration']\">Register</a></li>\n                <li><a *ngIf=\"user\">{{ user.email }}</a></li>\n                <li><a *ngIf=\"user\" (click)=\"logout()\">Logout</a></li>\n              </ul>\n            </div><!-- /.navbar-collapse -->\n          </div><!-- /.container-fluid -->\n        </nav>\n    ",
            providers: [user_srv_1.UserService],
            directives: [router_1.ROUTER_DIRECTIVES, search_component_1.SearchComponent]
        }), 
        __metadata('design:paramtypes', [user_srv_1.UserService, router_1.Router])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map