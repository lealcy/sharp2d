"use strict";

class ImageSource extends BaseObject {
    constructor(name, src) {
        super(name);
        this._src = src;
        this._image = new Image();
        this._imageReady = false;
        this._loadImage();
    }

    get src() { return this._src; }

    set src(value) {
        this._src = value;
        this._loadImage();
    }

    get width() {
        return this._image.width;
    }

    get height() {
        return this._image.height;
    }

    get image() {
        return this._image;
    }

    _loadImage() {
        this._imageReady = false;
        if (this._src) {
            this._image.onload = this._imageLoaded.bind(this);
            this._image.src = this._src;
        }
    }

    _imageLoaded() {
        this._imageReady = true;
    }
}
