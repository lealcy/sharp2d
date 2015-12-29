"use strict";

/* export */
class Scene {
    constructor(sharp2d) {
        if (sharp2d === undefined) {
            console.error("Scene must receive a Sharp2d instance.");
        }
        this._sharp2d = sharp2d;
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
        this._sharp2d.drawImage(image, x, y, width, height);
    }

    get sharp2d() { return this._sharp2d; }

}
