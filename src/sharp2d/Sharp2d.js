"use strict";

// import "Mouse.js";
// import "Keyboard.js";
// import "Scene.js";

/* export */
class Sharp2d {
    constructor(canvasElement) {
        this._canvas = canvasElement;

        // fix some canvas caveats
        this._canvas.tabIndex = 1; // Make canvas a focusable object.
        this._canvas.style.outline = "none"; // Disable the focus outline.
        this._canvas.focus();

        this._context = this._canvas.getContext("2d");
        this._mouse = new Mouse(this._canvas);
        this._keyboard = new Keyboard(this._canvas);
        this._scene = new Scene(this);
        this._running = false;
        this._updateInterval = 1000 / 60; // 60 fps. PC Master Race
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
        this._running = true;
        this._mouse.doStart();
        this._keyboard.doStart();
        this._scene.doStart();
        this.update();
    }

    update() {
        if (this._running) {
            this._requestAnimFrame.call(window, this.update.bind(this));
            if (this._clearOnUpdate) {
                this.clear();
            }
            this._scene.doUpdate();
            this._mouse.doUpdate();
            this._keyboard.doUpdate();
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

    get running() { return this._running; }
    get scene() { return this._scene; }
    get mouse() { return this._mouse; }
    get keyboard() { return this._keyboard; }
    get width() { return this._canvas.width; }
    get height() { return this._canvas.height; }
    get canvas() { return this._canvas; }
    get context() { return this._context; }
    set clearOnUpdate(value) { this._clearOnUpdate = value; }
}
