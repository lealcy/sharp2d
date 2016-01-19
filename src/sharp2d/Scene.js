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

    start() {
        this._entities.forEach((entity) => {
            entity.doStart();
        });
    }

    update() {
        this._entities.forEach((entity) => {
            entity.doUpdate();
        });
    }
}
