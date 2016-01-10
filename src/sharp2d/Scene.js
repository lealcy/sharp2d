"use strict";

/* export */
class Scene {
    constructor(gameInstance) {
        if (gameInstance === undefined) {
            console.error("Scene must receive a Sharp2d instance.");
        }
        this._gi = gameInstance;
        this._entities = [];

    }

    add(entity) {
        this._entities.push(entity);
    }

    start() {
        this._entities.forEach((entity) => {
            entity.start(this);
        });
    }

    update() {
        this._entities.forEach((entity) => {
            entity.update(this);
        });
    }

    drawImage(image, x, y, width, height) {
        this._gi.drawImage(image, x, y, width, height);
    }

    get gameInstance() { return this._gi; }

}
