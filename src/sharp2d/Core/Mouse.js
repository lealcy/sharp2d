"use strict";

class Mouse extends BaseObject {

    // TODO: Diferentiate drag events by mouse button

    constructor(name, canvasElement) {
        super(name);
        this._canvas = canvasElement;
        this._x = 0;
        this._y = 0;
        this._move = false;
        this._out = false;
        this._context = false;
        this._buttonsDown = [false, false, false];
        this._buttonsUp = [false, false, false];
        this._buttonsClick = [false, false, false];
        this._dragButton = Mouse.buttons.none;
        this._wheelUp = false;
        this._wheelDown = false;
        this._dragStart = false;
        this._dragMove = false;
        this._dragEnd = false;
        this._ignoreOutEvent = false;
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
        this._buttonsUp = [false, false, false];
        this._buttonsClick = [false, false, false];
        this._move = false;
        this._out = false;
        this._context = false;
        this._wheelUp = false;
        this._wheelDown = false;
        if (this._dragEnd) {
            this._dragButton = Mouse.buttons.none;
            this._dragStart = false;
            this._dragMove = false;
            this._dragEnd = false;
        }
    }

    get x() { return this._x; }
    get y() { return this._y; }
    get leftDown() { return this._buttonsDown[this.buttons.left]; }
    get centerDown() { return this._buttonsDown[this.buttons.center]; }
    get rightDown() { return this._buttonsDown[this.buttons.right]; }
    get leftUp() { return this._buttonsUp[this.buttons.left]; }
    get centerUp() { return this._buttonsUp[this.buttons.center]; }
    get rightUp() { return this._buttonsUp[this.buttons.right]; }
    get leftClick() { return this._buttonsClick[this.buttons.left]; }
    get centerClick() { return this._buttonsClick[this.buttons.center]; }
    get rightClick() { return this._buttonsClick[this.buttons.right]; }
    get wheelUp() { return this._wheelUp; }
    get wheelDown() { return this._wheelDown; }
    get out() { return this._out; }
    get contextMenu() { return this._context; }

    get ignoreOutEvent() {
        return this._ignoreOutEvent;
    }

    set ignoreOutEvent(value) {
        this._ignoreOutEvent = value;
    }

    static get buttons() {
        return Mouse.prototype._buttons;
    }

    _mouseDown(e) {
        var e = this._normalizeDOMMouseEvent(e);
        this._buttonsDown[e.button] = true;
        this._dragStart = e;
        this._dragButton = e.button;
        this._dragMove = false;
        this._dragEnd = false;
        return false;
    }

    _mouseUp(e) {
        var e = this._normalizeDOMMouseEvent(e);
        this._buttonsDown[e.button] = false;
        this._buttonsUp[e.button] = true;
        if (this._dragButton == e.button) {
            if (this._dragStart && this._dragMove) {
                this._dragEnd = e;
            } else {
                // Mouse didn't move
                this._buttonsClick[e.button] = true;
                this._dragStart = false;
            }
        }
        return false;
    }

    _mouseMove(e) {
        var e = this._normalizeDOMMouseEvent(e);
        this._x = e.x;
        this._y = e.y;
        this._move = true;
        if (this._dragStart && this._dragButton == e.button &&
            (this._dragMove || (this._dragStart.x != e.x &&
                this._dragStart.y != e.y))) {
            this._dragMove = e;
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
        if (!this._ignoreOutEvent) {
            this._out = true;
            if (!this._buttonsDown.every(value => value == false)) {
                this._mouseUp(e);
            }
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

Mouse.prototype._buttons = {
    none: -1,
    left: 0,
    center: 1,
    right: 2,
    wheelUp: 1,
    wheelDown: -1,
    wheelNone: 0,
};
