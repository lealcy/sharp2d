"use strict";

class Transform extends Component {
    constructor(name) {
        super(name);
        this._scaleWidth = 1.0;
        this._scaleHeight = 1.0;
        this._rotateAngle = 0.0;
        this._skewVertical = 0.0;
        this._skewHorizontal = 0.0;
        this._translateX = 0;
        this._translateY = 0;
        this._pivot = this.pivots.topLeft;
    }

    beforeUpdate(game, gameObject) {
        gameObject.drawSurface.saveContext();
    }

    afterUpdate(game, gameObject) {
        gameObject.drawSurface.restoreContext();
    }

    scale(width, height) {
        if (width >= 0 && height >= 0) {
            this._scaleWidth = width;
            this._scaleHeight = height;
        }
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

    get pivot() {
        return this._pivot;
    }

    set pivot(value) {
        this._pivot = value;
    }

    get pivotX() {
        switch(this._pivot) {
            case this.pivots.top:
            case this.pivots.bottom:
            case this.pivots.center:
                return -(this._width / 2);
                break;
            case this.pivots.topRight:
            case this.pivots.right:
            case this.pivots.bottomRight:
                return -this._width;
                break;
            case this.pivots.bottomLeft:
            case this.pivots.left:
            case this.pivots.topLeft:
                return 0;
                break;
            default:
                return 0;
                break;
        }
    }

    get pivotY() {
        switch(this._pivot) {
            case this.pivots.top:
            case this.pivots.topRight:
            case this.pivots.topLeft:
                return 0;
                break;
            case this.pivots.right:
            case this.pivots.left:
            case this.pivots.center:
                return -(this._height / 2);
                break;
            case this.pivots.bottomRight:
            case this.pivots.bottom:
            case this.pivots.bottomLeft:
                return -this._height;
                break;
            default:
                return 0;
                break;
        }
    }
}

Transform.prototype.pivots = {
    center: Symbol("center"),
    top: Symbol("top"),
    topRight: Symbol("topRight"),
    right: Symbol("right"),
    bottomRight: Symbol("bottomRight"),
    bottom: Symbol("bottom"),
    bottomLeft: Symbol("bottomLeft"),
    left: Symbol("left"),
    topLeft: Symbol("topLeft"),
};
