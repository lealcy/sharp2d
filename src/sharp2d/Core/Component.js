"use strict";

class Component extends BaseObject {
    constructor(name) {
        super(name);

        this._entity = null;
    }

    beforeUpdate() {
        // Called before entity update();
    }

    afterUpdate() {
        // Called after entity update();
    }

    get entity() {
        if (!this._entity) {
            this.error("The Component must be attached to an Entity.");
        }
        return this._entity;
    }

    set entity(value) {
        if (this._entity) {
            this.error("The Entity for this Component already defined.");
        }
        this._entity = value;
    }
}
