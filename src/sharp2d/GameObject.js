"use strict";

class GameObject extends BaseObject {
    constructor(name) {
        super(name);
        this._components = [];
        this._x = 0;
        this._y = 0;
        this._width = 0;
        this._height = 0;
        this._transform = new Transform(this._name + ".transform");
    }

    start(game) {
        // To be extended.
    }

    update(game) {
        // To be extended.
    }

    addComponent(component) {
        this._components.push(component);
    }

    position(x, y) {
        this.x = x;
        this.y = y;
    }

    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
    }

    get y() {
        return this._y;
    }

    set y(value) {
        this._y = value;
    }

    get width() {
        return this._width;
    }

    set width(value) {
        this._width = value;
    }

    get height() {
        return this._height;
    }

    set height(value) {
        this._height = value;
    }

    get transform() {
        return this._transform;
    }

    set transform(value) {
        this._transform = value;
    }

    _beforeStart(game) {
        this._transform.beforeStart(game, this);
        this._components.forEach(component => component.beforeStart(game, this));
        return true;
    }

    _afterStart(game) {
        this._components.forEach(component => component.afterStart(game, this));
        this._transform.afterStart(game, this);
    }

    _beforeUpdate(game) {
        this._transform.beforeUpdate(game, this);
        this._components.forEach(component => component.beforeUpdate(game, this));
        return true;
    }

    _afterUpdate(game) {
        this._components.forEach(component =>
            component.afterUpdate(game, this));
        this._transform.afterUpdate(game, this);
    }

    /*    get mouseOver() {
            if (this.mouse.x >= this.x && this.mouse.y >= this._y &&
                this.mouse.x < this.x + this._width &&
                this.mouse._y < this.y + this._height) {
                return true;
            }
            return false;
    }*/
}
