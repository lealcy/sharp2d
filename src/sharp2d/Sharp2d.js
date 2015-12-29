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
        this._updateInterval = 1000 / 60; // 60 fps.
        this._requestAnimFrame = window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function(callback) {
                setTimeout(callback, this.updateInterval);
            };
    }

    start() {
        this._running = true;
        this._mouse.start();
        this._keyboard.start();
        this._scene.start();
        this.update();
    }

    update() {
        if (this._running) {
            this._requestAnimFrame.call(window, this.update.bind(this));
            this.clear();
            this._scene.update();
            this._mouse.update();
            this._keyboard.update();
        }
    }

    clear () {
        this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }

    drawImage(image, x, y) {
        this._context.drawImage(image, x, y);
    }

    get running() {
        return this._running;
    }

    get scene() {
        return this._scene;
    }

    get keyboard() {
        return this._keyboard;
    }

    get width() {
        return this._canvas.width;
    }

    get height() {
        return this._canvas.height;
    }
}
