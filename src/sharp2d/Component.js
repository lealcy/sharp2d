"use strict";

class Component extends BaseObject {
    constructor(name) {
        super(name);
        if (!name) {
            this.error("All components must have names.");
        }

    }

    beforeStart(game, gameObject) {
        // to be extended
    }

    afterStart(game, gameObject) {
        // to be extended
    }

    beforeUpdate(game, gameObject) {
        // to be extended
    }

    afterUpdate(game, gameObject) {
        // to be extended
    }
}
