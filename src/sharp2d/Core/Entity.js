"use strict";

class Entity extends BaseObject {
    constructor(name) {
        super(name);
        this._parent = null;
        this._components = [];
        this._entities = [];
        this._transform = new Transform(this._name + ".transform");
    }

    animationFrame() {
        if (this.enabled) {
            this._transform.callEvent("beforeUpdate", ...arguments);
            this._components.forEach(
                component => component.callEvent("beforeUpdate", ...arguments)
            );

            this._animationFrame(...arguments);
            this._components.forEach(
                component => component.callEvent("update", ...arguments)
            );
            if (Game.debug) {
                this.game.renderer.drawBoundBox(0, 0, this.transform.width, 
                    this.transform.height, "light red");
            }

            this._entities.forEach(entity => 
                entity.animationFrame(...arguments));

            this._components.forEach(
                component => component.callEvent("afterUpdate", ...arguments)
            );
            this._transform.callEvent("afterUpdate", ...arguments);
        }
    }

    addComponent(component) {
        component.entity = this;
        this._components.push(component);
        return component;
    }

    getComponent(name) {
        return this._components.find(component => component.name == name);
    }

    addEntity(entity) {
        entity.parent = this;
        entity.transform.x = this.transform.centerX;
        entity.transform.y = this.transform.centerY;
        this._entities.push(entity);
        return entity;
    }

    callEvent(eventName) {
        if (this._enabled) {
            this._components.forEach(
                component =>
                    eventName in component && component[eventName](...arguments)
            );
            this._entities.forEach(entity => entity.callEvent(...arguments));
        }
    }

    get parent() {
        if (!this._parent) {
            this.error("Entity doesn't have a parent.");
        }
        return this._parent;
    }

    set parent(value) {
        if (this._parent) {
            this.error("Entity already have a parent.");
        }
        this._parent = value;
    }

    get transform() {
        return this._transform;
    }

    set transform(value) {
        this._transform = value;
    }

    _animationFrame() {
        // To be extended
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
