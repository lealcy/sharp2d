"use strict";

class Component extends BaseObject {
    constructor(name, entity) {
        super(name);
        if (typeof entity === undefined || !(entity instanceof Entity)) {
            this.error("Every Component must have an Entity parent.");
        }
        this._entity = entity;
    }

    get entity() {
        return this._entity;
    }
}
