"use strict";
var AlbumImpl = (function () {
    function AlbumImpl(id, name, artist, url, images, songs) {
        this.id = id;
        this.name = name;
        this.artist = artist;
        this.url = url;
        this.images = images;
        this.songs = songs;
    }
    AlbumImpl.prototype.getImage = function (size) {
        var image = this.images.find(function (image) { return (image["size"] == size); });
        return image ? image["#text"] : undefined;
    };
    return AlbumImpl;
}());
exports.AlbumImpl = AlbumImpl;
//# sourceMappingURL=album.impl.js.map