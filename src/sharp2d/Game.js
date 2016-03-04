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
        this._world.transform.width = this._renderer.width;
        this._world.transform.height = this._renderer.height;
        this._world.transform.pivot = Transform.pivots.topLeft;
        this._started = false;
        this._deltaTime = 0;
        this._processTime = 0;

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

    get renderer() {
        return this._renderer;
    }

    get deltaTime() {
        return this._deltaTime;
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

    _animationFrame(timestamp) {
        this._deltaTime = timestamp - this._processTime;
        this._processTime = timestamp;
        console.log(timestamp, this._deltaTime);
        if (this._enabled && this._started) {
            this._requestAnimFrame.call(window, this._animationFrame.bind(this));
            if (this._clearOnUpdate) {
                this._renderer.clear();
            }
            this._world.animationFrame();
            this._mouse.update();
            this._keyboard.update();
        }
    }
}
