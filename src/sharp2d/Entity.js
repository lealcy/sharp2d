"use strict";

class Entity extends BaseObject {
    constructor(name) {
        super(name);
        this._components = [];
        this._children = [];
        this._transform = new Transform(this._name + ".transform", this);
        this._transform.entity = this;
    }

    start() {
        // To be extended.
    }

    update() {
        // To be extended.
    }

    addComponent(component) {
        this._components.push(component);
        component.entity = this;
        return component;
    }

    addEntity(child) {
        this._children.push(child);
    }

    callEvent() {
        if (this._enabled) {
            this._transform.callEvent(...arguments);
            this._components.forEach(
                component => component.callEvent(...arguments)
            );
            this._children.forEach(child => child.callEvent(...arguments));
            super.callEvent(...arguments);
        }
    }

    get transform() {
        return this._transform;
    }

    set transform(value) {
        this._transform = value;
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
