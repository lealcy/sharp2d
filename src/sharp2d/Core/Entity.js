"use strict";

class Entity extends BaseObject {
    constructor(name) {
        super(name);
        this._components = [];
        this._entities = [];
        this._transform = new Transform(this._name + ".transform", this);
    }

    animationFrame(eventName, ...args) {
        this._transform.callEvent("beforeUpdate", ...args);
        this._components.forEach(component => component.callEvent("beforeUpdate", ...args));
        this.callEvent("beforeUpdate", ...args);

        this._transform.callEvent("update", ...args);
        this._components.forEach(component => component.callEvent("update", ...args));
        this.callEvent("update", ...args);
        this._entities.forEach(entity => entity.callEvent(eventName, ...args));

        this.callEvent("afterUpdate", ...args);
        this._components.forEach(component => component.callEvent("afterUpdate", ...args));
        this._transform.callEvent("afterUpdate", ...args);
    }

    start() {
        // To be extended.
    }

    update() {
        // To be extended.
    }

    addComponent(component) {
        this._components.push(component);
        return component;
    }

    addEntity(entity) {
        this._entities.push(entity);
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
