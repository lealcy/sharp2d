"use strict";

class Sprite {
    constructor(gameInstance, src) {
        this.gi = gameInstance;
        this.src = src;
        this._image = null;
        this._imageReady = false;
        this._loadImage();
    }

    drawAt(x, y) {
        this._gi.drawImage(this._image, x, y, this.width, this.height);
    }

    get src() { return this._src; }
    set src(value) {
        this._src = value;
        this._loadImage();
    }

    get width() {
        return this.imageReady ? this._image.width : 0;
    }

    get height() {
        return this._imageReady ? this._image.height : 0;
    }

    _loadImage() {
        this._imageReady = false;
        this._image = new Image();
        this._image.onload = this._imageLoaded.bind(this);
        this._image.src = this._src;
    }

    _imageLoaded() {
        this._imageReady = true;
    }
}
