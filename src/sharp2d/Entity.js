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

    start(scene) {
        // To be extended
    }

    update(scene) {
        // To be extended
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

    set visible(value) {
        this._visible = value;
    }

    get visible() {
        return this._visible;
    }

}
