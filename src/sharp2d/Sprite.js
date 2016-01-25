"use strict";

class Sprite extends Entity {
    constructor(gameInstance, src) {
        super(gameInstance);
        this._src = src;
        this._image = null;
        this._imageReady = false;
    }

    doStart() {
        if (this._beforeStart()) {
            this.start();
            this._loadImage();
            this._afterStart();
        }
    }

    doUpdate() {
        if(this._beforeUpdate()) {
            this.update();
            this._gi.drawImage(this._image, this.x, this.y, this.width,
                this.height);
            this._afterUpdate();
        }
    }

    get src() { return this._src; }

    set src(value) {
        this._src = value;
        this._loadImage();
    }

    get width() {
        return this._imageReady ? this._image.width : this._width;
    }

    get height() {
        return this._imageReady ? this._image.height : this._height;
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
