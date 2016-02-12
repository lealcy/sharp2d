"use strict";

class Game extends BaseObject {
    constructor(name, canvasElement) {
        super(name);
        this._gameInstance = this;
        this._drawSurface = new CanvasDrawSurface(canvasElement);
        this._mouse = new Mouse("defaultMouse", canvasElement);
        this._keyboard = new Keyboard("defaultKeyboard", canvasElement);
        this._updateInterval = 1000 / 60; // 60 fps. Glorious PC Master Race.
        this._clearOnUpdate = true;
        this._composition = new Composition("defaultComposition");
        this._started = false;

        if (window.requestAnimationFrame) {
            this._requestAnimFrame = window.requestAnimationFrame;
        } else if (window.webkitRequestAnimationFrame) {
            this._requestAnimFrame = window.webkitRequestAnimationFrame;
        } else if (window.mozRequestAnimationFrame) {
            this._requestAnimFrame = window.mozRequestAnimationFrame;
        } else {
            this._requestAnimFrame = (callback) => {
                setTimeout(callback, this._updateInterval);
            };
        }
    }

    start() {
        this._mouse.start();
        this._keyboard.start();
        this._started = true;
        this._composition.callEvent("start");
        this._update();
    }

    get started() {
        return this._started;
    }

    get mouse() {
        return this._mouse;
    }

    get keyboard() {
        return this._keyboard;
    }

    get drawSurface() {
        return this._drawSurface;
    }

    get composition() {
        return this._composition;
    }

    set composition(value) {
        this._composition = value;
        if (this._started) {
            this._composition.callEvent("start");
        }
    }

    set clearOnUpdate(value) {
        this._clearOnUpdate = value;
    }

    _update() {
        if (this._started) {
            this._requestAnimFrame.call(window, this._update.bind(this));
            if (this._clearOnUpdate) {
                this._drawSurface.clear();
            }
            this._composition.callEvent("update");
            this._mouse.update();
            this._keyboard.update();
        }
    }
}
