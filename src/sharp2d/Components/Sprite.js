"use strict";

class Sprite extends Component {
    constructor(name, entity, src) {
        super(name, entity);
        this._imageSource = new ImageSource(null, src, () => {
            this.entity.transform.width = this._imageSource.width;
            this.entity.transform.height = this._imageSource.height;
        });
    }

    update() {
        this.game.renderer.drawImage(this._imageSource,
            this.entity.transform.x, this.entity.transform.y);
    }

    get src() {
        return this._imageSource.src;
    }

    set src(value) {
        this._imageSource.src = value;
    }
}
