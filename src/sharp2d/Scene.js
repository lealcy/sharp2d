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
            entity.start();
        });
    }

    update() {
        this._entities.forEach((entity) => {
            entity.update();
        });
    }

    drawImage(image, x, y) {
        this._sharp2d.drawImage(image, x, y);
    }

}
