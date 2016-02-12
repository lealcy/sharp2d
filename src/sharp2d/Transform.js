"use strict";

class Transform extends Component {
    constructor(name, entity) {
        super(name, entity);
        this.defaults();
    }

    beforeUpdate() {
        this.game.drawSurface.saveContext();
        this.game.drawSurface.transform(this._scaleWidth, this._skewHorizontal,
            this._skewVertical, this._scaleHeight, this._translateX,
            this._translateY);
        this.game.rotate(this._rotateAngle * Math.PI / 180);
    }

    afterUpdate() {
        this.game.drawSurface.restoreContext();
    }

    defaults() {
        this._scaleWidth = 1.0;
        this._scaleHeight = 1.0;
        this._rotateAngle = 0.0;
        this._skewHorizontal = 0.0;
        this._skewVertical = 0.0;
        this._translateX = 0;
        this._translateY = 0;
    }

    scale(width, height) {
        if (width >= 0 && height >= 0) {
            this._scaleWidth = width;
            this._scaleHeight = height;
        }
    }

    skew(horizontal, vertical) {
        this._skewHorizontal = horizontal;
        this._skewVertical = vertical;
    }

    translate(x, y) {
        this._translateX = x;
        this._translateY = y;
    }

    get scaleWidth() {
        return this._scaleWidth;
    }

    set scaleWidth(value) {
        if (value >= 0) {
            this._scaleWidth = value;
        }
    }

    get scaleHeight() {
        return this._scaleHeight;
    }

    set scaleHeight(value) {
        if (value >= 0) {
            this._scaleHeight = value;
        }
    }

    get rotate() {
        return this._rotateAngle;
    }

    set rotate(angle) {
        this._rotateAngle = angle;
    }
}
