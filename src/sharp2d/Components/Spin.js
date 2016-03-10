"use strict";

class Spin extends Behavior {
    constructor(name, angle) {
        super(name);
        this._angle = angle || 1;
    }

    beforeUpdate() {
        this.entity.transform.rotate += this._angle;
    }

    get angle() {
        return this._angle;
    }

    set angle(value) {
        this._angle = value;
    }
}
