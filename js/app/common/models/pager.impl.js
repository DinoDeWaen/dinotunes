"use strict";
var PagerImpl = (function () {
    function PagerImpl(itemsPerPage, starIndex, totalResults, maxPages) {
        if (maxPages === void 0) { maxPages = 10; }
        this.itemsPerPage = itemsPerPage;
        this.starIndex = starIndex;
        this.totalResults = totalResults;
        this.maxPages = maxPages;
        this.pages = 0;
        var realMaxPages = Math.ceil(this.totalResults / this.itemsPerPage);
        if (realMaxPages <= maxPages) {
            this.pages = realMaxPages;
        }
        else {
            this.pages = this.maxPages;
        }
    }
    return PagerImpl;
}());
exports.PagerImpl = PagerImpl;
//# sourceMappingURL=pager.impl.js.map