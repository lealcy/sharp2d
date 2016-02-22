"use strict";

class ImageSource extends BaseObject {
    constructor(name, src, onReadyCallback) {
        super(name);
        this._src = src;
        this._onReadyCallBack = onReadyCallback || function() {};
        this._image = new Image();
        this._image.onload = this._imageLoaded.bind(this);
        this._image.onerror = this.error.bind(this);
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

    get ready() {
        return this._imageReady;
    }

    _loadImage() {
        this._imageReady = false;
        if (this._src) {
            this._image.src = this._src;
        }
    }

    _imageLoaded() {
        this._imageReady = true;
        this._onReadyCallBack();
    }
}
