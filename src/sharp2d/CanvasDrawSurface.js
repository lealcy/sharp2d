"use strict";

class CanvasDrawSurface extends DrawSurface {
    constructor(name, CanvasElement) {
        super(name);
        this._canvas = canvasElement;

        // fix some canvas caveats
        this._canvas.tabIndex = 1; // Make canvas a focusable object.
        this._canvas.style.outline = "none"; // Disable the focus outline.
        this._canvas.focus();

        this._width = this._canvas.width;
        this._height = this._canvas.height;
        this._context = this._canvas.getContext("2d");
    }

    clear () {
        this._context.clearRect(0, 0, this._width, this._height);
    }

    drawImage(image, x, y) {
        this._context.drawImage(...arguments);
    }

    drawImageResize(imageSource, x, y, width, height) {
        this._context.drawImage(...arguments);
    }

    drawImageClipped(imageSource, sx, sy, swidth, sheight, x, y, width, height) {
        this._context.drawImage(...arguments);
    }

    saveContext() {
        this._context.save();
    }

    restoreContext() {
        this._context.restore();
    }

    set width(value) {
        super.width = this._canvas.width = value;
    }

    set height(value) {
        super.height = this._canvas.height = value;
    }

}
