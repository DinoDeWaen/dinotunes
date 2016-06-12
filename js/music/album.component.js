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
var album_1 = require("./models/album");
var music_srv_1 = require("./services/music.srv");
var router_1 = require('@angular/router');
var AlbumComponent = (function () {
    function AlbumComponent(musicService, routeParams) {
        this.musicService = musicService;
        this.routeParams = routeParams;
        this.albumImageSize = album_1.AlbumImageSize.LARGE;
        this.getAlbumInfo(this.routeParams.getParam("id"));
    }
    AlbumComponent.prototype.getAlbumInfo = function (query) {
        var _this = this;
        this.musicService.albumInfo(query)
            .subscribe(function (album) {
            _this.album = album;
        });
    };
    AlbumComponent = __decorate([
        core_1.Component({
            selector: 'album-component',
            template: "\n        <div class=\"album\" *ngIf=\"album\">\n            <div class=\"page-header\">\n              <h1>{{album.name}} <small>{{ album.artist }}</small></h1>\n            </div>\n            <div class=\"media\">\n              <div class=\"media-left\">\n                <a>\n                  <img class=\"media-object\" [src]=\"album.getImage(albumImageSize)\">\n                </a>\n              </div>\n              <div class=\"media-body\">\n                   <ul *ngFor=\"let song of album.songs\">\n                        <li>{{ song.name}}</li>\n                   </ul>\n              </div>\n            </div>\n        </div>\n    ",
            providers: [music_srv_1.MusicService],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [music_srv_1.MusicService, router_1.RouteSegment])
    ], AlbumComponent);
    return AlbumComponent;
}());
exports.AlbumComponent = AlbumComponent;
//# sourceMappingURL=album.component.js.map