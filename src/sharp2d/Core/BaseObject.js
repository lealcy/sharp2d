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
        if (this._debug) {
            console.log(this._name, "(" + this.constructor.name + "):", ...arguments);
        }
    }

    error() {
        var message = Array.prototype.slice.call(arguments).join(" ");
        var error = this._name + " (" + this.constructor.name + "): " + message;
        if (this._debug) {
            console.log(error);
        }
        throw new Error(error);
    }

    clone() {
        return Object.create(this);
    }

    callEvent(eventName, ...args) {
        if (this._enabled && eventName in this) {
            this[eventName](eventName, ...args);
        }
    }

    callEventEx(eventName, ...args) {
        if (this._enabled && eventName in this) {
            var before = "before" + this._ucFirst(eventName);
            var after = "after" + this._ucFirst(eventName);
            if(before in this && this[before](eventName, ...args)) {
                this[eventName](eventName, ...args);
                if(after in this) {
                    this[after](eventName, ...args);
                }
            } else {
                this[eventName](eventName, ...args);
                if(after in this) {
                    this[after](eventName, ...args);
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

    get debug() {
        return BaseObject.prototype._debug;
    }

    set debug(value) {
        BaseObject.prototype._debug = value;
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
BaseObject.prototype._debug = false;
