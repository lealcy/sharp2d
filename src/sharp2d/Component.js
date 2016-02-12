"use strict";

class Component extends BaseObject {
    constructor(name) {
        super(name);
        if (!name) {
            this.error("All components must have names.");
        }

    }

    beforeStart(game, entity) {
        // to be extended
    }

    afterStart(game, entity) {
        // to be extended
    }

    beforeUpdate(game, entity) {
        // to be extended
    }

    afterUpdate(game, entity) {
        // to be extended
    }
}
