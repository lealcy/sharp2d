"use strict";

class Sprite extends Entity {
    constructor(name, src) {
        super(name);
        this._imageSource = new ImageSource(null, src, () => {
            this.transform.width = this._imageSource.width;
            this.transform.height = this._imageSource.height;
        });
    }

    get src() {
        return this._imageSource.src;
    }

    set src(value) {
        this._imageSource.src = value;
    }

    _animationFrame() {
        this.game.renderer.drawImage(this._imageSource);
    }
}
