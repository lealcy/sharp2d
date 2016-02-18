"use strict";

class Transform extends Component {
    constructor(name) {
        super(name);
        this.defaults();
    }

    beforeUpdate() {
        this.game.drawSurface.saveContext();
        this.game.drawSurface.translate(this._pivotX, this._pivotY);
        this.game.drawSurface.transform(this._scaleWidth, this._skewHorizontal,
            this._skewVertical, this._scaleHeight, this._translateX,
            this._translateY);
        this.game.drawSurface.rotate(this._rotateAngle * Math.PI / 180);
    }

    afterUpdate() {
        this.game.drawSurface.restoreContext();
    }

    defaults() {
        this._x = 0;
        this._y = 0;
        this._width = 0;
        this._height = 0;
        this._scaleWidth = 1.0;
        this._scaleHeight = 1.0;
        this._rotateAngle = 0.0;
        this._skewHorizontal = 0.0;
        this._skewVertical = 0.0;
        this._translateX = 0;
        this._translateY = 0;
        this._pivot = this.pivots.topLeft;
        this._pivotX = 0;
        this._pivotY = 0;
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

    position(x, y) {
        this._x = x;
        this._y = y;
    }

    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
    }

    get y() {
        return this._y;
    }

    set y(value) {
        this._y = value;
    }

    get width() {
        return this._width;
    }

    set width(value) {
        this._width = value;
    }

    get height() {
        return this._height;
    }

    set height(value) {
        this._height = value;
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

    set rotate(value) {
        this._rotateAngle = value;
    }

    get pivot() {
        return this._pivot;
    }

    set pivot(value) {
        this._pivot = value;
        this._updatePivot();
    }

    get pivotX() {
        return this._pivotX;
    }

    set pivotX(value) {
        this._pivot = this.pivots.custom;
        this._pivotX = value;
    }

    get pivotY() {
        return this._pivotY;
    }

    set pivotY(value) {
        this._pivot = this.pivots.custom;
        this._pivotY = value;
    }

    _updatePivot() {
        switch(this._pivot) {
            case this.pivots.top:
                this._pivotX = -(this._entity.width / 2);
                this._pivotY = 0;
                break;
            case this.pivots.topRight:
                this._pivotX = -this._entity.width;
                this._pivotY = 0;
                break;
            case this.pivots.right:
                this._pivotX = -this._entity.width;
                this._pivotY = -(this._entity.height / 2);
                break;
            case this.pivots.bottomRight:
                this._pivotX = -this._entity.width;
                this._pivotY = -this._entity.height;
                break;
            case this.pivots.bottom:
                this._pivotX = -(this._entity.width / 2);
                this._pivotY = -this._entity.height;
                break;
            case this.pivots.bottomLeft:
                this._pivotX = 0;
                this._pivotY = -this._entity.height;
                break;
            case this.pivots.left:
                this._pivotX = 0;
                this._pivotY = -(this._entity.height / 2);
                break;
            case this.pivots.topLeft:
                this._pivotX = 0;
                this._pivotY = 0;
                break;
            case this.pivots.center:
                this._pivotX = -(this._entity.width / 2);
                this._pivotY = -(this._entity.height / 2);
                break;
            case this.pivots.custom:
                break;
            default:
                this._x = 0;
                this._y = 0;
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
    custom: Symbol("custom"),
};
