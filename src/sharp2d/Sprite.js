"use strict";

/* export */
class Sprite extends Entity {
    constructor(fileName) {
        super();
        this._fileName = fileName || null;
        this._image = null;
        this._imageReady = false;
        if (this._fileName) {
            this._image = new Image();
            this._image.onload = this._imageLoaded.bind(this);
            this._image.src = this._fileName;
            this._visible = true;
        }
    }

    start(scene) {
        super.start(scene);
        // to be extended
    }

    update(scene) {
        super.update();
        if (this._visible && this._imageReady) {
            scene.drawImage(this._image, this._x, this._y);
        }
    }

    get image() {
        return this._image;
    }

    _imageLoaded() {
        this._width = this._image.width;
        this._height = this._image.height;
        this._imageReady = true;
    }
}
