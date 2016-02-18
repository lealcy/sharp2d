"use strict";

class Sprite extends Component {
    constructor(name, src) {
        super(name);
        this._imageSource = new ImageSource(null, src);
    }

    get src() {
        return this._imageSource.src;
    }

    set src(value) {
        this._imageSource.src = value;
    }

    update() {
        this.game.drawSurface.drawImage(this._imageSource, this._entity.transform.x,
            this._entity.transform.y);
    }
}
