"use strict";

/* export */
class Entity {
    constructor() {
        this._x = 0;
        this._y = 0;
        this._width = 0;
        this._height = 0;
        this._visible = false;
    }

    start() {
        // To be extended
    }

    update() {
        // To be extended
    }

    centerOn (x, y) {
        this._x = x - this._width / 2;
        this._y = y - this._height / 2;
    }

    set x(value) { this._x = value; }
    get x() { return this._x; }
    set y(value) { this._y = value; }
    get y() { return this._y; }
    set width(value) { this._width = value; }
    get width() { return this._width; }
    set height(value) { this._height = value; }
    get height() { return this._height; }
    set visible(value) { this._visible = value; }
    get visible() { return this._visible; }

}
