"use strict";

class Composition extends BaseObject {
    constructor(name) {
        super(name);
        this._children = [];
        this._x = 0;
        this._y = 0;
    }

    start(game) {
        if (this._enabled) {
            this._children.forEach(child => child.callEvent("start", game);
        }
    }

    update(game) {
        if (this._enabled) {
            this._children.forEach(child => child.callEvent("update", game);
        }
    }

    add(child) {
        this._children.push(child);
    }
}
