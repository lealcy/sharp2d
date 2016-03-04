"use strict";

class CanvasRenderer extends BaseRenderer {
    constructor(name, canvasElement) {
        super(name);
        this._canvas = canvasElement;

        // fix some canvas caveats
        this._canvas.tabIndex = 1; // Make canvas a focusable object.
        this._canvas.style.outline = "none"; // Disable the focus outline.
        this._canvas.focus();
        this._width = this._canvas.width;
        this._height = this._canvas.height;

        //super.width = this._canvas.width;
        //super.height = this._canvas.height;
        this._context = this._canvas.getContext("2d");
    }

    clear () {
        this._context.clearRect(0, 0, this._width, this._height);
    }

    transform() {
        this._context.transform(...arguments);
    }

    rotate() {
        this._context.rotate(...arguments);
    }

    drawImage(imageSource) {
        this._context.drawImage(imageSource.image, 0, 0);
    }

    drawImageClipped(imageSource, offsetX, offsetY, clipWidth,
        clipHeight) {
        this._context.drawImage(imageSource.image, offsetX, offsetY, clipWidth,
            clipHeight, 0, 0);
    }

    saveContext() {
        this._context.save();
    }

    restoreContext() {
        this._context.restore();
    }

    translate(x, y) {
        this._context.translate(x, y);
    }

    drawFPSCounter() {
        this._context.fillText((Math.round(1000 / this.game.deltaTime * 100) / 100) + " FPS (" + this.game.deltaTime + " ms)", 10, 10);
    }

    drawBoundBox(x, y, width, height) {
        this._context.beginPath();
        this._context.lineWidth = 1;
        this._context.strokeStyle = "OrangeRed";
        this._context.rect(x, y, width, height);
        this._context.moveTo(x, y);
        this._context.lineTo(x + width, y + height);
        this._context.stroke();
    }

    get width() {
        return super.width;
    }

    set width(value) {
        super.width = this._canvas.width = value;
    }

    get height() {
        return super.height;
    }

    set height(value) {
        super.height = this._canvas.height = value;
    }

}
