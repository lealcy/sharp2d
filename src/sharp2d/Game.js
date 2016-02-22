"use strict";

class Game extends BaseObject {
    constructor(canvasElement) {
        super("Game");
        BaseObject.prototype._gameInstance = this;
        this._renderer = new CanvasRenderer("Canvas Renderer", canvasElement);
        this._mouse = new Mouse("Default Mouse", canvasElement);
        this._keyboard = new Keyboard("Default Keyboard", canvasElement);
        this._refreshInterval = 1000 / 60; // 60 fps. Glorious PC Master Race.
        this._clearOnUpdate = true;
        this._world = new Entity("World Entity");
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
            this._world.callEventEx("start");
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

    get renderer() {
        return this._renderer;
    }

    get world() {
        return this._world;
    }

    set world(value) {
        this._world = value;
        if (this._world) {
            this._world.callEventEx("start");
        }
    }

    set clearOnUpdate(value) {
        this._clearOnUpdate = value;
    }

    _animationFrame() {
        if (this._enabled && this._started) {
            this._requestAnimFrame.call(window, this._animationFrame.bind(this));
            if (this._clearOnUpdate) {
                this._renderer.clear();
            }
            this._world.callEventEx("animationFrame");
            this._mouse.update();
            this._keyboard.update();
        }
    }
}
