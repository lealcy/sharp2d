"use strict";

class Component extends BaseObject {
    constructor(name, entity) {
        super(name);
        this._entity = entity;
    }

    get entity() {
        return this._entity;
    }

    set entity(value) {
        if (!this._entity) {
            this._entity = value;
        }
    }
}
