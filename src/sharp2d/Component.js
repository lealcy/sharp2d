"use strict";

class Component extends BaseObject {
    constructor(name, entity) {
        super(name);
        if (!name) {
            this.error("All components must have names.");
        }
        if (!entity) {
            this.error("All components must be attached to an entity.");
        }
        this._entity = entity;
    }

    get entity() {
        return this._entity;
    }

    beforeStart() {
        // to be extended
    }

    afterStart() {
        // to be extended
    }

    beforeUpdate() {
        // to be extended
    }

    afterUpdate() {
        // to be extended
    }
}
