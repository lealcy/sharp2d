"use strict";

class Game extends Entity {
    constructor(canvasElement) {
        super(null);
        this.debug("Game.constructor");
        this._canvas = canvasElement;

        // fix some canvas caveats
        this._canvas.tabIndex = 1; // Make canvas a focusable object.
        this._canvas.style.outline = "none"; // Disable the focus outline.
        this._canvas.focus();

        this._context = this._canvas.getContext("2d");
        this._mouse = new Mouse(this._canvas);
        this._keyboard = new Keyboard(this._canvas);
        this._running = false;
        this._updateInterval = 1000 / 60; // 60 fps. Glorious PC Master Race.
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
        this._clearOnUpdate = true;
    }

    start() {
        this.debug("Game.start");
        this._running = true;
        this._mouse.start();
        this._keyboard.start();
        super.start();
        this.update();
    }

    update() {
        // this.debug("Game.update");
        if (this._running) {
            this._requestAnimFrame.call(window, this.update.bind(this));
            if (this._clearOnUpdate) {
                this.clear();
            }
            super.update();
            this._mouse.update();
            this._keyboard.update();
        }
    }

    clear () {
        this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }

    drawImage(image, x, y, width, height) {
        // this.debug("Game.drawImage");
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

    get parent() { return this; }
    get running() { return this._running; }
    get mouse() { return this._mouse; }
    get keyboard() { return this._keyboard; }
    get width() { return this._canvas.width; }
    get height() { return this._canvas.height; }
    get canvas() { return this._canvas; }
    get context() { return this._context; }
    set clearOnUpdate(value) { this._clearOnUpdate = value; }

}
