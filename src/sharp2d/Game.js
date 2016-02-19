"use strict";

class Game extends BaseObject {
    constructor(canvasElement) {
        super("Game");
        BaseObject.prototype._gameInstance = this;
        this._drawSurface = new CanvasDrawSurface("defaultCanvas", canvasElement);
        this._mouse = new Mouse("defaultMouse", canvasElement);
        this._keyboard = new Keyboard("defaultKeyboard", canvasElement);
        this._refreshInterval = 1000 / 60; // 60 fps. Glorious PC Master Race.
        this._clearOnUpdate = true;
        this._world = new Entity("defaultComposition");
        this._started = false;

        if (window.requestAnimationFrame) {
            this._requestAnimFrame = window.requestAnimationFrame;
        } else if (window.webkitRequestAnimationFrame) {
            this._requestAnimFrame = window.webkitRequestAnimationFrame;
        } else if (window.mozRequestAnimationFrame) {
            this._requestAnimFrame = window.mozRequestAnimationFrame;
        } else {
            this._requestAnimFrame = (callback) => {
                setTimeout(callback, this._refreshInterval);
            };
        }
    }

    start() {
        if (!this._started) {
            this._started = true;
            this._mouse.start();
            this._keyboard.start();
            this._world.callEvent("start");
        }
        this.enable;
    }
    
    get enable() {
        super.enable;
        this._animationFrame();
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

    get world() {
        return this._world;
    }

    set world(value) {
        this._world = value;
        if (this._world) {
            this._world.callEvent("start");
        }
    }

    set clearOnUpdate(value) {
        this._clearOnUpdate = value;
    }

    _animationFrame() {
        if (this._enabled && this._started) {
            this._requestAnimFrame.call(window, this._animationFrame.bind(this));
            if (this._clearOnUpdate) {
                this._drawSurface.clear();
            }
            this._world.callEvent("animationFrame");
            this._mouse.update();
            this._keyboard.update();
        }
    }
}
