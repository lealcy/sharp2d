"use strict";

class Sprite extends GameObject {
    constructor(parent, src) {
        super(parent);
        this._src = src;
        this._image = null;
        this._imageReady = false;
    }

    start() {
        if (this._beforeStart()) {
            this._loadImage();
            this._start();
            this._afterStart();
        }
    }

    update() {
        //this.debug("Sprite.update");
        if (this._imageReady && this._beforeUpdate()) {
            this.drawImage(this._image, this.x, this.y, this.width,
                this.height);
            this._update();
            this._afterUpdate();
        }
    }

    draw(x, y, width, height) {
        if (this._imageReady) {
            x = typeof x === "undefined" ? this.x : x;
            y = typeof y === "undefined" ? this.y : y;
            width = typeof width === "undefined" ? this.width : width;
            height = typeof height === "undefined" ? this.height : height;
            this.drawImage(this._image, x, y, width, height);
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

    set width(value) {
        this.error("width is a read only property.");
    }

    get height() {
        return this._imageReady ? this._image.height : this._height;
    }

    set height(value) {
        this.error("height is a read only property.");
    }

    _loadImage() {
        this._imageReady = false;
        this._image = new Image();
        if (this._src) {
            this._image.onload = this._imageLoaded.bind(this);
            this._image.src = this._src;
        }
    }

    _imageLoaded() {
        this._imageReady = true;
        this._width = this._image.width;
        this._height = this._image.height;
    }
}
