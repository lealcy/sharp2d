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
        this._offsetX = 0; //the pivot offset.
        this._offsetY = 0; //the pivot offset.
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
        this._calculatePivotOffsets();
        return this._x - this._offsetX;
    }

    set y(value) {
        this._y = value;
    }

    get y() {
        return this._y;
    }

    get drawY() {
        this._calculatePivotOffsets();
        return this._y - this._offsetY;
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

    _calculatePivotOffsets() {
        switch(this._pivot) {
            case this.pivots.center:
                this._offsetX = this.width / 2;
                this._offsetY = this.height / 2;
                break;
            case this.pivots.top:
                this._offsetX = this.width / 2;
                this._offsetY = 0;
                break;
            case this.pivots.topRight:
                this._offsetX = this.width;
                this._offsetY = 0;
                break;
            case this.pivots.right:
                this._offsetX = this.width;
                this._offsetY = this.height / 2;
                break;
            case this.pivots.bottomRight:
                this._offsetX = this.width / 2;
                this._offsetY = this.height / 2;
                break;
            case this.pivots.bottom:
                this._offsetX = this.width / 2;
                this._offsetY = this.height;
                break;
            case this.pivots.bottomLeft:
                this._offsetX = 0;
                this._offsetY = this.height;
                break;
            case this.pivots.left:
                this._offsetX = 0;
                this._offsetY = this.height / 2;
                break;
            case this.pivots.topLeft:
                this._offsetX = 0;
                this._offsetY = 0;
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
