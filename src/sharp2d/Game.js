"use strict";

class Game extends GameObject {
    constructor(canvasElement) {
        super();
        this.log("Game.constructor");
        this._canvas = canvasElement;

        // fix some canvas caveats
        this._canvas.tabIndex = 1; // Make canvas a focusable object.
        this._canvas.style.outline = "none"; // Disable the focus outline.
        this._canvas.focus();
        this._width = this._canvas.width;
        this._height = this._canvas.height;
        this._context = this._canvas.getContext("2d");
        this._mouse = new Mouse(this._canvas);
        this._keyboard = new Keyboard(this._canvas);
        this._running = false;
        this._updateInterval = 1000 / 60; // 60 fps. Glorious PC Master Race.
        this._clearOnUpdate = true;

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
        this._running = true;
        this._mouse.start();
        this._keyboard.start();
        if (this._beforeStart()) {
            this._start();
            this._afterStart();
        }
        this.update();
    }

    update() {
        if (this._running) {
            this._requestAnimFrame.call(window, this.update.bind(this));
            if (this._clearOnUpdate) {
                this.clear();
            }
            if (this._beforeUpdate()) {
                this._update();
                this._afterUpdate();
            }
            this._mouse.update();
            this._keyboard.update();
        }
    }

    clear () {
        this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }

    drawImage(image, x, y, width, height) {
        this._context.drawImage(image, x, y, width, height);
    }

    newContext() {
        return this._canvas.getContext("2d");
    }

    saveContext() {
        this._context.save();
    }

    restoreContext() {
        this._context.restore();
    }

    set x(value) {
        this.error("x is a read only property.");
    };

    set y(value) {
        this.error("y is a read only property.");
    }

    set width(value) {
        this.error("width is a read only property.");
    }

    set height(value) {
        this.error("height is a read only property.");
    }

    get running() {
        return this._running;
    }

    get mouse() {
        return this._mouse;
    }

    get keyboard() {
        return this._keyboard;
    }
    get canvas() {
        return this._canvas;
    }

    get context() {
        return this._context;
    }

    set clearOnUpdate(value) {
        this._clearOnUpdate = value;
    }
}
