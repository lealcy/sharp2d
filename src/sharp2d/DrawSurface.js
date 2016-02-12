"use strict";

class DrawSurface extends BaseObject {
    constructor(name) {
        super(name);
        this._width = 0;
        this._height = 0;
    }

    clear() {
        // Clears the draw surface.
    }

    drawImage(imageSource, x, y) {
        // Draws the image keeping its aspect ratio.
    }

    drawImageResize(imageSource, x, y, width, height) {
        // Draws the image with custom proportions.
    }

    drawImageClipped(imageSource, sx, sy, swidth, sheight, x, y, width, height) {
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
