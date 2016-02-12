"use strict";

class Entity extends BaseObject {
    constructor(name) {
        super(name);
        this._components = [];
        this._x = 0;
        this._y = 0;
        this._width = 0;
        this._height = 0;
        this._transform = this._instanciateComponent(Transform,
            this._name + ".transform");
        this._pivot = this._instanciateComponent(Pivot, this._name + ".pivot");
    }

    start() {
        // To be extended.
    }

    update() {
        // To be extended.
    }

    addComponent(component, name) {
        var newComponent = this._instanciateComponent(component, name);
        this._components.push(newComponent);
        return newComponent;
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

    get pivot() {
        return this._pivot;
    }

    _beforeStart() {
        this._components.forEach(component => component.beforeStart());
        return true;
    }

    _afterStart(game) {
        this._components.forEach(component => component.afterStart());
    }

    _beforeUpdate(game) {
        this._transform.beforeUpdate();
        this._pivot.beforeUpdate();
        this._components.forEach(component => component.beforeUpdate());
        return true;
    }

    _afterUpdate(game) {
        this._components.forEach(component => component.afterUpdate());
        this._pivot.afterUpdate();
        this._transform.afterUpdate();
    }

    _instanciateComponent(component, name) {
        return new component(name, this);
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
