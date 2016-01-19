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
        this.start();
    }

    doUpdate() {
        if (this.enabled) {
            this._gi.context.save();
            this._gi.context.scale(this._scaleWidth, this._scaleHeight);
            switch(this._pivot) {
                case this.pivots.top:
                    this._gi.context.translate(-(this.width / 2), 0);
                    break;
                case this.pivots.topRight:
                    this._gi.context.translate(-this.width, 0);
                    break;
                case this.pivots.right:
                    this._gi.context.translate(-this.width, -(this.height / 2));
                    break;
                case this.pivots.bottomRight:
                    this._gi.context.translate(-this.width, -this.height);
                    break;
                case this.pivots.bottom:
                    this._gi.context.translate(-(this.width / 2), -this.height);
                    break;
                case this.pivots.bottomLeft:
                    this._gi.context.translate(0, -this.height);
                    break;
                case this.pivots.left:
                    this._gi.context.translate(0, -(this.height / 2));
                    break;
                case this.pivots.topLeft:
                    break;
                case this.pivots.center:
                    this._gi.context.translate(-(this.width / 2),
                        -(this.height / 2));
                    break;
                default:
                    console.log("Invalid pivot value.");
                    break;
            }
            this.update();
            this._gi.context.restore();
        }
    }

    scale(width, height) {
        this._scaleWidth = width;
        this._scaleHeight = height;
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
