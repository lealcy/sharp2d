"use strict";

/* export */
class Mouse {

    // TODO: Diferentiate drag events by mouse button

    constructor(canvasElement) {
        this._canvas = canvasElement;
        this._x = 0;
        this._y = 0;
        this._move = false;
        this._out = false;
        this._context = false;
        this._buttonsDown = new Set();
        this._buttonsUp = new Set();
        this._buttonsClick = new Set();
        this._wheelUp = false;
        this._wheelDown = false;
        this._dragStart = false;
        this._dragMove = false;
        this._dragEnd = false;
    }

    start() {
        this._canvas.onmousedown = this._mouseDown.bind(this);
        this._canvas.onmouseup = this._mouseUp.bind(this);
        this._canvas.onmousemove = this._mouseMove.bind(this);
        this._canvas.onmousewheel = this._mouseWheel.bind(this);
        this._canvas.onmouseout = this._mouseOut.bind(this);
        this._canvas.oncontextmenu = this._contextMenu.bind(this);
    }

    update() {
        this._buttonsUp.clear();
        this._buttonsClick.clear();
        this._move = false;
        this._out = false;
        this._context = false;
        this._wheelUp = false;
        this._wheelDown = false;
        if (this._dragEnd) {
            this._dragStart = false;
            this._dragMove = false;
            this._dragEnd = false;
        }
    }

    get x() { return this._x; }
    get y() { return this._y; }
    get leftDown() { return this._buttonsDown.has(this.buttons.left); }
    get centerDown() { return this._buttonsDown.has(this.buttons.center); }
    get rightDown() { return this._buttonsDown.has(this.buttons.right); }
    get leftUp() { return this._buttonsUp.has(this.buttons.left); }
    get centerUp() { return this._buttonsUp.has(this.buttons.center); }
    get rightUp() { return this._buttonsUp.has(this.buttons.right); }
    get leftClick() { return this._buttonsClick.has(this.buttons.left); }
    get centerClick() { return this._buttonsClick.has(this.buttons.center); }
    get rightClick() { return this._buttonsClick.has(this.buttons.right); }
    get wheelUp() { return this._wheelUp; }
    get wheelDown() { return this._wheelDown; }
    get out() { return this._out; }
    get contextMenu() { return this._context; }

    _mouseDown(e) {
        var e = this._normalizeDOMMouseEvent(e);
        this._buttonsDown.add(e.button);
        this._dragStart = e;
        this._dragMove = false;
        this._dragEnd = false;
        return false;
    }

    _mouseUp(e) {
        var e = this._normalizeDOMMouseEvent(e);
        this._buttonsDown.delete(e.button);
        this._buttonsUp.add(e.button);
        if (this._dragStart && this._dragMove) {
            this._dragEnd = e;
        } else {
            // Mouse didn't move
            this._buttonsClick.add(e.button);
            this._dragStart = false;
        }
        return false;
    }

    _mouseMove(e) {
        var e = this._normalizeDOMMouseEvent(e);
        this._x = e.x;
        this._y = e.y;
        this._move = true;
        if (this._dragStart) {
            if (this._dragMove) {
                this._dragMove = e;
            } else if (this._dragStart.x != e.x && this._dragStart.y != e.y) {
                this._dragMove = e;
            }
        }
        return false;
    }

    _mouseWheel(e) {
        var e = this._normalizeDOMMouseEvent(e);
        switch (e.wheelDirection) {
            case this.buttons.wheelUp:
                this._wheelUp = true;
                break;
            case this.buttons.wheelDown:
                this._wheelDown = true;
                break;
        }
        return false;
    }

    _mouseOut(e) {
        this._out = true;
        if (this._buttonsDown.size) {
            this._mouseUp(e);
        }
    }

    _contextMenu(e) {
        this._context = true;
        return false;
    }

    _normalizeDOMMouseEvent(e) {
        return {
            button: e.button,
            x: e.offsetX === undefined ? e.originalEvent.layerX : e.offsetX,
            y: e.offsetY === undefined ? e.originalEvent.layerY : e.offsetY,
            wheelDirection: e.wheelDelta / 120,
            DOMMouseEvent: e,
        };
    }
}

Mouse.prototype.buttons = {
    none: -1,
    left: 0,
    center: 1,
    right: 2,
    wheelUp: 1,
    wheelDown: -1,
    wheelNone: 0,
};
