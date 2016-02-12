"use strict";

class Composition extends BaseObject {
    constructor(name) {
        super(name);
        this._children = [];
    }

    start(game) {
        if (this._enabled) {
            this._children.forEach(child => child.callEvent("start");
        }
    }

    update(game) {
        if (this._enabled) {
            this._children.forEach(child => child.callEvent("update");
        }
    }

    add(child) {
        this._children.push(child);
    }
}
