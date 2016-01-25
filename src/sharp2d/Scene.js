"use strict";

/* export */
class Scene extends Entity {
    constructor(gameInstance) {
        super(gameInstance);
        this._entities = [];
    }

    add(entity) {
        this._entities.push(entity);
    }

    doStart() {
        if (this._beforeStart()) {
            this.start();
            this._entities.forEach((entity) => {
                entity.doStart();
            });
            this._afterStart();
        }
    }

    doUpdate() {
        if(this._beforeUpdate()) {
            this.update();
            this._entities.forEach((entity) => {
                entity.doUpdate();
            });
            this._afterUpdate();
        }
    }
}
