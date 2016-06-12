"use strict";
/**
 * Created by serrut on 07/06/16.
 */
var CountryImpl = (function () {
    function CountryImpl(rawData) {
        this.alpha2code = rawData["alpha2Code"];
        this.name = rawData["name"];
    }
    return CountryImpl;
}());
exports.CountryImpl = CountryImpl;
//# sourceMappingURL=country.impl.js.map