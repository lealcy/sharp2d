"use strict";

/* export */
class Entity {
    constructor() {
        this._x = 0;
        this._y = 0;
        this._width = 0;
        this._height = 0;
        this._visible = false;
        this._xScale = 1.0;
        this._yScale = 1.0;
        this._pivot = this.pivots.topLeft;
    }

    start() {
        // To be extended
    }

    update() {
        // To be extended
    }

    setScale(xValue, yValue) {
        this.xScale = xValue;
        this.yScale = yValue;
    }

    set x(value) {
        this._x = value;
    }

    get x() {
        return this._x;
    }

    get drawX() {
        return this._x - this.offsetX;
    }

    set y(value) {
        this._y = value;
    }

    get y() {
        return this._y;
    }

    get drawY() {
        return this._y - this.offsetY;
    }

    set width(value) {
        this._width = value;
    }

    get width() {
        return this._width;
    }

    get drawWidth() {
        return this._width * this._xScale;
    }

    set height(value) {
        this._height = value;
    }

    get height() {
        return this._height;
    }

    get drawHeight() {
        return this._height * this._yScale;
    }

    set visible(value) {
        this._visible = value;
    }

    get visible() { return this._visible; }

    set scale(value) {
        this.setScale(value, value);
    }

    get scale() {
        return (this.xScale + this.yScale) / 2;
    }

    set xScale(value) {
        if (value >= 0) {
            this._xScale = value;
        }
    }

    get xScale() { return this._xScale; }

    set yScale(value) {
        if (value >= 0) {
            this._yScale = value;
        }
    }

    get yScale() { return this._yScale; }

    get offsetX() {
        switch(this._pivot) {
            case this.pivots.center:
            case this.pivots.top:
            case this.pivots.bottomRight:
            case this.pivots.bottom:
                return this.width / 2;
                break;
            case this.pivots.topRight:
            case this.pivots.right:
                return this.width;
                break;
            case this.pivots.bottomLeft:
            case this.pivots.left:
            case this.pivots.topLeft:
                return 0;
                break;
            default:
                console.log("Invalid pivot value.");
                break;
        }
    }

    get offsetY() {
        switch(this._pivot) {
            case this.pivots.right:
            case this.pivots.bottomRight:
            case this.pivots.center:
            case this.pivots.left:
                return this.height / 2;
                break;
            case this.pivots.bottom:
            case this.pivots.bottomLeft:
                return this.height;
                break;
            case this.pivots.topLeft:
            case this.pivots.top:
            case this.pivots.topRight:
                return 0;
                break;
            default:
                console.log("Invalid pivot value.");
                break;
        }

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
