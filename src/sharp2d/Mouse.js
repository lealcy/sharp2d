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
            case this.buttons.WHEEL_UP:
                this._wheelUp = true;
                break;
            case this.buttons.WHEEL_DOWN:
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

    get buttons() {
        return {
            NONE: -1,
            LEFT: 0,
            CENTER: 1,
            RIGHT: 2,
            WHEEL_UP: 1,
            WHEEL_DOWN: -1,
            WHEEL_NONE: 0,
        };
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
