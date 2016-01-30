"use strict";

class Sprite extends Entity {
    constructor(parent, src) {
        super(parent);
        this.debug("Sprite.constructor");
        this._src = src;
        this._image = null;
        this._imageReady = false;
    }

    start() {
        this.debug("Sprite.start");
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
        console.log("Sprite._loadImage");
        this._imageReady = false;
        this._image = new Image();
        if (this._src) {
            this._image.onload = this._imageLoaded.bind(this);
            this._image.src = this._src;
        }
    }

    _imageLoaded() {
        console.log("Sprite._imageLoaded");
        this._imageReady = true;
        this._width = this._image.width;
        this._height = this._image.height;
    }
}
