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
        if (BaseObject.debug) {
            console.log(error);
        }
        throw new Error(error);
    }

    clone() {
        return Object.create(this);
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

    static get debug() {
        return BaseObject.prototype._debug;
    }

    static set debug(value) {
        BaseObject.prototype._debug = value;
    }
}

BaseObject.prototype._objectList = [];
BaseObject.prototype._gameInstance = null;
BaseObject.prototype._debug = false;
