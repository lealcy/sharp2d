"use strict";

class Vector {
    construct(x, y) {
        this.x = x || 0;
        this.y = y || 0;
    }

    translate(x, y) {
        this.x = x;
        this.y = y;
    }

    normalize() {
        this.x = this.x / this.magnitude;
        this._y = this._y / this.magnitude;
    }

    toString() {
        return `Vector(x: ${this.x}, y: ${this.y})`;
    }

    get magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    get normalized() {
        return new Vector(this.x / this.magnitude, this.y / this.magnitude);
    }

    get sqrMagnitude() {
        return this.x * this.x + this.y * this.y;
    }

    static angle(v1, v2) {
        return Math.acos(v1.x * v2.x + v1.y * v2.y /
            (v1.magnitude * v2.magnitude));
    }

    static dot(v1, v2) {
        return v1.x * v2.x + v1.y * v2.y;
    }

    static sub(v1, v2) {
        return new Vector(v1.x - v2.x, v1.y - v2.y);
    }

    static sum(v1, v2) {
        return new Vector(v1.x + v2.x, v1.y + v2.y);
    }

    static distance(v1, v2) {
        return Vector.sub(v1, v2).magnitude;
    }

    static max(v1, v2) {
        return new Vector(Math.max(v1.x, v2.x), Math.max(v1.y, v2.y));
    }

    static min(v1, v2) {
        return new Vector(Math.min(v1.x, v2.x), Math.min(v1.y, v2.y));
    }

    static scale(v1, v2) {
        return new Vector(v1.x * v2.x, v1.y * v2.y);
    }

    static equals(v1, v2) {
        return v1.x === v2.x && v1.y === v2.y;
    }

    /*static lerp(v1, v2, t) {
        if (t === 0) {
            return v1;
        }
        if (t === 1) {
            return v2;
        }

        throw new Error("Vecto.lerp not completely implemented");
    }*/

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