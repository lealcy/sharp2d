"use strict";

/* export */
class Entity {
    constructor(scene) {
        if (scene === undefined) {
            console.error("Entities can only exists inside scenes");
        }
        this._scene = scene || null;
        this._x = 0;
        this._y = 0;
        this._width = 0;
        this._height = 0;
        this._visible = false;
    }

    start() {
        // To be extended
    }

    update() {
        // To be extended
    }

    set scene(value) {
        if (value.constructor.name !== "Scene") {
            console.error("scene must be of type Scene.");
            return;
        }
        this._scene = value;
    }

    get scene() {
        return this._scene;
    }

    set x(value) {
        this._x = value;
    }

    get x() {
        return this._x;
    }

    set y(value) {
        this._x = value;
    }

    get y() {
        return this._y;
    }

    set width(value) {
        this._width = value;
    }

    get width() {
        return this._width;

    }

    set height(value) {
        this._height = value;

    }

    get height() {
        return this._height;
    }

    set visible(value) {
        this._visible = value;
    }

    get visible() {
        return this._visible;
    }

}
