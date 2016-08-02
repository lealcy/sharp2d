"use strict";

class Mouse extends BaseObject {

    // TODO: Diferentiate drag events by mouse button

    constructor(game, parent, HTMLCanvasElement) {
        super(game, parent, "Mouse");
        if (!Mouse.Buttons) {
            Mouse.Buttons = {
                none: -1,
                left: 0,
                center: 1,
                right: 2,
                wheelUp: 1,
                wheelDown: -1,
                wheelNone: 0,
            };
        }
        this.x = 0;
        this.y = 0;
        this.moved = false;
        this.out = false;
        this._context = false;
        this._buttonsDown = [false, false, false];
        this._buttonsUp = [false, false, false];
        this._buttonsClick = [false, false, false];
        this._dragButton = Mouse.Buttons.none;
        this._wheelUp = false;
        this._wheelDown = false;
        this._dragStart = false;
        this._dragMove = false;
        this._dragEnd = false;
        this.ignoreOutEvents = false;
        HTMLCanvasElement.onmousedown = this._mouseDown.bind(this);
        HTMLCanvasElement.onmouseup = this._mouseUp.bind(this);
        HTMLCanvasElement.onmousemove = this._mouseMove.bind(this);
        HTMLCanvasElement.onmousewheel = this._mouseWheel.bind(this);
        HTMLCanvasElement.onmouseout = this._mouseOut.bind(this);
        HTMLCanvasElement.oncontextmenu = this._contextMenu.bind(this);    
    }

    lateUpdate() {
        this._buttonsUp = [false, false, false];
        this._buttonsClick = [false, false, false];
        this.moved = false;
        this.out = false;
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

    isButtonDown(button) {
        return this._buttonsDown[button];
    }

    isButtonUp(button) {
        return this._buttonsUp[button];
    }

    get leftDown() { return this._buttonsDown[Mouse.buttons.left]; }
    get centerDown() { return this._buttonsDown[Mouse.buttons.center]; }
    get rightDown() { return this._buttonsDown[Mouse.buttons.right]; }
    get leftUp() { return this._buttonsUp[Mouse.buttons.left]; }
    get centerUp() { return this._buttonsUp[Mouse.buttons.center]; }
    get rightUp() { return this._buttonsUp[Mouse.buttons.right]; }
    get leftClick() { return this._buttonsClick[Mouse.buttons.left]; }
    get centerClick() { return this._buttonsClick[Mouse.buttons.center]; }
    get rightClick() { return this._buttonsClick[Mouse.buttons.right]; }
    get wheelUp() { return this._wheelUp; }
    get wheelDown() { return this._wheelDown; }
    get contextMenu() { return this._context; }

    _mouseDown(e) {
        e = this._normalizeDOMMouseEvent(e);
        this._buttonsDown[e.button] = true;
        this._dragStart = e;
        this._dragButton = e.button;
        this._dragMove = false;
        this._dragEnd = false;
        return false;
    }

    _mouseUp(e) {
        e = this._normalizeDOMMouseEvent(e);
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
        e = this._normalizeDOMMouseEvent(e);
        this.x = e.x;
        this.y = e.y;
        this.moved = true;
        if (this._dragStart && this._dragButton == e.button &&
            (this._dragMove || (this._dragStart.x != e.x &&
                this._dragStart.y != e.y))) {
            this._dragMove = e;
        }
        return false;
    }

    _mouseWheel(e) {
        e = this._normalizeDOMMouseEvent(e);
        switch (e.wheelDirection) {
            case Mouse.Buttons.wheelUp:
                this._wheelUp = true;
                break;
            case Mouse.buttons.wheelDown:
                this._wheelDown = true;
                break;
        }
        return false;
    }

    _mouseOut(e) {
        if (!this.ignoreOutEvents) {
            this.out = true;
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