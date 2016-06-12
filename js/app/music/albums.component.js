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
var router_1 = require('@angular/router');
var album_1 = require('./models/album');
var music_srv_1 = require('./services/music.srv');
var pagination_component_1 = require('../common/pagination.component');
var AlbumsComponent = (function () {
    function AlbumsComponent(musicService, routeParams) {
        this.musicService = musicService;
        this.routeParams = routeParams;
        this.albumImageSize = album_1.AlbumImageSize.MEDIUM;
        this.albums = [];
        this.albumsSearch(this.routeParams.getParam("query"), 20);
    }
    AlbumsComponent.prototype.albumsSearch = function (query, page) {
        var _this = this;
        this.musicService.albumsSearch(query)
            .subscribe(function (albums) {
            _this.albums = albums;
        });
    };
    AlbumsComponent = __decorate([
        core_1.Component({
            selector: 'albums-component',
            template: "\n        <ul class=\"media-list\">\n              <li class=\"media\" *ngFor=\"let album of albums\">\n                <div class=\"media-left\">\n                    <a [routerLink]=\"['/album', { id : album.id }]\">\n                        <img class=\"media-object\" [src]=\"album.getImage(albumImageSize)\" >\n                    </a>\n                </div>\n                <div class=\"media-body\">\n                  <h4 class=\"media-heading\">{{album.name}}</h4>\n                  {{album.artist}}\n                </div>\n              </li>\n        </ul>\n        <pagination-component [pager]=\"pager\" [pathName]=\"'Albums'\"></pagination-component>\n    ",
            providers: [music_srv_1.MusicService],
            directives: [router_1.ROUTER_DIRECTIVES, pagination_component_1.PaginationComponent]
        }), 
        __metadata('design:paramtypes', [music_srv_1.MusicService, router_1.RouteSegment])
    ], AlbumsComponent);
    return AlbumsComponent;
}());
exports.AlbumsComponent = AlbumsComponent;
//# sourceMappingURL=albums.component.js.map