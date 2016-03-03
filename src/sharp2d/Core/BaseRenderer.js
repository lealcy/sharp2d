"use strict";

class BaseRenderer extends BaseObject {
    constructor(name) {
        super(name);
        this._width = 0;
        this._height = 0;
    }

    clear() {
        // Clears the draw surface.
    }

    transform() {

    }

    rotate() {

    }

    drawImage(imageSource, transform) {
        // Draws the image keeping its aspect ratio.
    }

    drawImageClipped(imageSource, transform, offsetX, offsetY, clipWidth,
        clipHeight) {
        // Draws just part of the image.
    }

    saveContext() {
        // Saves the current transformation matrix of the surface.
    }

    restoreContext() {
        // Restores the transformation matrix to before the saveContext().
    }

    translate(x, y) {
        // Moves the coordinate system by the x,y offset.
    }

    get width() {
        return this._width;
    }

    set width(value) {
        this._width = value;
    }

    get height() {
        return this._height;
    }

    set height(value) {
        this._height = value;
    }
}
