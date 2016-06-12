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
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
require("rxjs/add/operator/map");
var http_1 = require('@angular/http');
var country_impl_1 = require("../models/country.impl");
var CountryService = (function () {
    function CountryService(http) {
        this.http = http;
        this.countryUrl = "https://restcountries.eu/rest/v1/all";
        this.testCountryFile = "./respository/testCountryData.json";
    }
    CountryService.prototype.getCountries = function () {
        var _this = this;
        return new Observable_1.Observable(function (observable) {
            _this.http.get("https://restcountries.eu/rest/v1/all")
                .map(function (res) {
                var body = res.json();
                var countries = [];
                body.forEach(function (data) {
                    countries.push(new country_impl_1.CountryImpl(data));
                });
                return countries;
            })
                .subscribe(function (countries) {
                observable.next(countries);
            });
        });
    };
    CountryService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    CountryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CountryService);
    return CountryService;
}());
exports.CountryService = CountryService;
//# sourceMappingURL=country.srv.js.map