"use strict";

/* export */
class Entity {
    constructor() {
        this._x = 0;
        this._y = 0;
        this._width = 0;
        this._height = 0;
        this._visible = false;
        this._scale = 1.0;
        this._xScale = 1.0;
        this._yScale = 1.0;
    }

    start() {
        // To be extended
    }

    update() {
        // To be extended
    }

    centerOn (x, y) {
        this.x = x - this.width / 2;
        this.y = y - this.height / 2;
    }

    set x(value) { this._x = value; }
    get x() { return this._x; }
    set y(value) { this._y = value; }
    get y() { return this._y; }
    set width(value) { this._width = value; }
    get width() { return this._width * this._xScale; }
    set height(value) { this._height = value; }
    get height() { return this._height * this._yScale; }
    set visible(value) { this._visible = value; }
    get visible() { return this._visible; }
    set scale(value) {
        if (value >= 0) {
            this._scale = this._xScale = this._yScale = value;
        }
    }
    get scale() { return this._scale; }
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

}
