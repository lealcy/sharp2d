"use strict";

/* export */
class Sprite extends Entity {
    constructor(src) {
        super();
        this.visible = true;
        this._src = src;
        this._image = null;
        this._imageReady = false;
        this._loadImage();
    }

    start(scene) {
        super.start();
        // to be extended
    }

    update(scene) {
        super.update();
        if (this._visible && this._imageReady) {
            scene.drawImage(this._image, this.x, this.y, this.width,
                this.height);
        }
    }

    get image() { return this._image; }
    get src() { return this._src; }
    set src(value) {
        this._src = value;
        this._loadImage();
    }

    _loadImage() {
        this._imageReady = false;
        this._image = new Image();
        this._image.onload = this._imageLoaded.bind(this);
        this._image.src = this._src;
    }

    _imageLoaded() {
        this._width = this._image.width;
        this._height = this._image.height;
        this._imageReady = true;
    }
}
