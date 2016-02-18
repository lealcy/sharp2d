"use strict";

class BaseObject {
    constructor(name) {
        this._name = name || this.constructor.name;
        this._enabled = true;
        this._objectList.push(this);
    }

    findByName(name) {
        return this._objectList.find(element => element.name === name);
    }

    log() {
        if (this.debug) {
            console.log(this._name, "->", ...arguments);
        }
    }

    error() {
        var message = Array.prototype.slice.call(arguments).join(" ");
        var error = this._name + ": " + message;
        if (this.debug) {
            console.log(error);
        }
        throw new Error(error);
    }

    clone() {
        return Object.create(this);
    }

    callEvent(eventName, ...args) {
        if (this._enabled && eventName in this) {
            var before = "_before" + this._ucFirst(eventName);
            var after = "_after" + this._ucFirst(eventName);
            if(before in this && this[before](...args)) {
                this[eventName](...args);
                if(after in this) {
                    this[after](...args);
                }
            } else {
                this[eventName](...args);
                if(after in this) {
                    this[after](...args);
                }
            }
        }
    }

    get name() {
        return this._name;
    }

    get game() {
        return BaseObject.prototype._gameInstance;
    }

    get enable() {
        return this._enabled = true;
    }

    get disable() {
        return this._enabled = false;
    }

    get enabled() {
        return this._enabled;
    }

    _ucFirst(value) {
        return value && value[0].toUpperCase() + value.slice(1);
    }
}

BaseObject.prototype._objectList = [];
BaseObject.prototype._gameInstance = null;
BaseObject.prototype.debug = false;
