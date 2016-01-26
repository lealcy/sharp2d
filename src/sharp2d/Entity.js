"use strict";

/* export */
class Entity {
    constructor(gameInstance) {
        this._gi = gameInstance;
        this._x = 0;
        this._y = 0;
        this._width = 0;
        this._height = 0;
        this._enabled = true;
        this._scaleWidth = 1.0;
        this._scaleHeight = 1.0;
        this._pivot = this.pivots.topLeft;
    }

    start() {
        // To be extended
    }

    update() {
        // To be extended
    }

    doStart() {
        if (this._beforeStart()) {
            this.start();
            this._afterStart();
        }
    }

    doUpdate() {
        if (this._beforeUpdate()) {
            this.update();
            this._afterUpdate();
        }
    }

    scale(width, height) {
        this.scaleWidth = width;
        this.scaleHeight = height;
    }

    set x(value) {
        this._x = value;
    }

    get x() {
        return this._x;
    }

    set y(value) {
        this._y = value;
    }

    get y() {
        return this._y;
    }

    set width(value) {
        this._width = value;
    }

    get width() {
        return this._width;
    }

    set height(value) {
        this._height = value;
    }

    get height() {
        return this._height;
    }

    get enable() {
        return this._enabled = true;
    }

    get disable() {
        return this._enabled = false;
    }

    get enabled() {
        return this._enabled;
    }

    set scaleWidth(value) {
        if (value >= 0) {
            this._scaleWidth = value;
        }
    }

    get scaleWidth() { return this._scaleWidth; }

    set scaleHeight(value) {
        if (value >= 0) {
            this._scaleHeight = value;
        }
    }

    get scaleHeight() { return this._scaleHeight; }

    get gameInstance() {
        return this._gi;
    }

    get mouse() {
        return this._gi.mouse;
    }

    get keyboard() {
        return this._gi.keyboard;
    }

    get pivot() {
        return this._pivot;
    }

    get pivotX() {
        switch(this._pivot) {
            case this.pivots.top:
            case this.pivots.bottom:
            case this.pivots.center:
                return -(this.width / 2);
                break;
            case this.pivots.topRight:
            case this.pivots.right:
            case this.pivots.bottomRight:
                return -this.width;
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
                return -(this.height / 2);
                break;
            case this.pivots.bottomRight:
            case this.pivots.bottom:
            case this.pivots.bottomLeft:
                return  -this.height;
                break;
            default:
                return 0;
                break;
        }
    }

    set pivot(value) {
        this._pivot = value;
    }

    get absoluteX() {
        return (this.x + this.pivotX) * this.scaleWidth;
    }

    get absoluteY() {
        return (this.y + this.pivotY) * this.scaleHeight;
    }

    get absoluteWidth() {
        return this.width * this.scaleWidth;
    }

    get absoluteHeight() {
        return this.height * this.scaleHeight;
    }

    get mouseOver() {
        if (this.mouse.x >= this.absoluteX && this.mouse.y >= this.absoluteY &&
            this.mouse.x < this.absoluteX + this.absoluteWidth &&
            this.mouse.y < this.absoluteY + this.absoluteHeight) {
            return true;
        }
        return false;
    }

    _beforeStart() {
        return this.enabled;
    }

    _afterStart() {
        // Do Nothing.
    }

    _beforeUpdate() {
        if (!this.enabled) {
            return false;
        }
        this._gi.context.save();
        this._gi.context.scale(this._scaleWidth, this._scaleHeight);
        this._gi.context.translate(this.pivotX, this.pivotY);
        return true;
    }

    _afterUpdate() {
        this._gi.context.restore();
    }
}

Entity.prototype.pivots = {
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
