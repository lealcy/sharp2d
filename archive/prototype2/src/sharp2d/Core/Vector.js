"use strict";

class Vector extends BaseObject {
    constructor(x, y) {
        this._x = x || 0;
        this._y = y || 0;
    }

    position(x, y) {
        this._x = x;
        this._y = y;
    }

    normalize() {
        this._x = this._x / this.magnitude;
        this._y = this._y / this.magnitude;
    }

    static angle(v1, v2) {
        return Math.acos(v1.x * v2.x + v1.y * v2.y /
            (v1.magnitude * v2.magnitude));
    }

    static dot(v1, v2) {
        return v1.x * v2.x + v1.y * v2.y;
    }

    //static lerp(vector1.)

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

    get magnitude() {
        return Math.sqrt(this._x * this._x + this._y * this._y);
    }

    get normalized() {
        return new Vector(this._x / this.magnitude, this._y / this.magnitude);
    }

    get sqrMagnitude() {
        return this._x * this._x + this._y * this._y;
    }

    static get up() {
        return new Vector(0, 1);
    }

    static get right() {
        return new Vector(1, 0);
    }

    static get down() {
        return new Vector(0, -1);
    }

    static get left() {
        return new Vector(-1, -0);
    }

    static get one() {
        return new Vector(1, 1);
    }

    static get zero() {
        return new Vector(0, 0);
    }

}
