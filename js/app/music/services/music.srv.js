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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var album_impl_1 = require('../models/album.impl');
var song_impl_1 = require('../models/song.impl');
require("rxjs/add/operator/map");
var MusicService = (function () {
    function MusicService(http) {
        this.http = http;
        this.apiId = "34f4b6414a86a36295f43db1600772d0";
    }
    MusicService.prototype.albumsSearch = function (query, page) {
        var _this = this;
        if (page === void 0) { page = 0; }
        return new Observable_1.Observable(function (observable) {
            var pageParam = page + 1;
            var url = " http://ws.audioscrobbler.com/2.0/?method=album.search&album=" + query + "&format=json&api_key=" + _this.apiId + "&page=1";
            _this.http.get(url)
                .map(function (res) {
                var body = res.json();
                var albums = [];
                var results = body.results;
                results.albummatches.album.forEach(function (data) {
                    albums.push(new album_impl_1.AlbumImpl(data["mbid"], data["name"], data["artist"], data["url"], data["image"], null));
                });
                return albums;
            })
                .subscribe(function (res) {
                observable.next(res);
            });
        });
    };
    MusicService.prototype.albumInfo = function (query) {
        var _this = this;
        return new Observable_1.Observable(function (observable) {
            var url = "http://ws.audioscrobbler.com/2.0/?method=album.getInfo&mbid=" + query + "&format=json&api_key=" + _this.apiId;
            _this.http.get(url)
                .map(function (res) {
                var body = res.json();
                var data = body.album;
                var songs = [];
                data.tracks.track.forEach(function (track) {
                    console.log(track.name);
                    songs.push(new song_impl_1.SongImpl(track.name));
                });
                console.log(songs.concat());
                var album = new album_impl_1.AlbumImpl(data["mbid"], data["name"], data["artist"], data["url"], data["image"], songs);
                return album;
            })
                .subscribe(function (res) {
                observable.next(res);
            });
        });
    };
    MusicService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MusicService);
    return MusicService;
}());
exports.MusicService = MusicService;
//# sourceMappingURL=music.srv.js.map