"use strict";

class Keyboard  extends BaseObject {
    constructor(name, canvasElement) {
        super(name);
        this._canvas = canvasElement;
        this._keyDownList = new Set();
        this._keyUpList = new Set();
        this._ignoreThisKeys = new Set([Keyboard.keys.f5, Keyboard.keys.f12]);
    }

    start() {
        this._canvas.addEventListener("keydown", this._keyDown.bind(this), false);
        this._canvas.addEventListener("keyup", this._keyUp.bind(this), false);
    }

    update() {
        this._keyUpList.clear();
    }

    keyDown(keyCode) {
        return this._keyDownList.has(keyCode);
    }

    keyUp(keyCode) {
        return this._keyUpList.has(keyCode);
    }

    ignoreThisKey(keyCode) {
        this._ignoreThisKeys.add(keyCode);
    }

    dontIgnoreThisKey(KeyCode) {
        this._ignoreThisKeys.delete(keyCode);
    }

    isKeyIgnored(keyCode) {
        return this._ignoreThisKeys.has(keyCode);
    }

    static get keys() {
        return Keyboard.prototype._keys;
    }

    _keyDown(e) {
        if(this._ignoreThisKeys.has(e.keyCode)) {
            return true;
        }
        e.preventDefault();
        this._keyDownList.add(e.keyCode);
        return false;
    }

    _keyUp(e) {
        if(this._ignoreThisKeys.has(e.keyCode)) {
            return true;
        }
        e.preventDefault();
        this._keyDownList.delete(e.keyCode);
        this._keyUpList.add(e.keyCode);
        return false;
    }
}

Keyboard.prototype._keys = {
    backspace: 8,
    tab: 9,
    enter: 13,
    shift: 16,
    ctrl: 17,
    alt: 18,
    pause: 19,
    capsLock: 20,
    escape: 27,
    pageUp: 33,
    pageDown: 34,
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    insert: 45,
    delete: 46,
    num0: 48,
    num1: 49,
    num2: 50,
    num3: 51,
    num4: 52,
    num5: 53,
    num6: 54,
    num7: 55,
    num8: 56,
    num9: 57,
    a: 65,
    b: 66,
    c: 67,
    d: 68,
    e: 69,
    f: 70,
    g: 71,
    h: 72,
    i: 73,
    j: 74,
    k: 75,
    l: 76,
    m: 77,
    n: 78,
    o: 79,
    p: 80,
    q: 81,
    r: 82,
    s: 83,
    t: 84,
    u: 85,
    v: 86,
    w: 87,
    x: 88,
    y: 89,
    z: 90,
    leftWindow: 91,
    rightWindow: 92,
    select: 93,
    numpad0: 96,
    numpad1: 97,
    numpad2: 98,
    numpad3: 99,
    numpad4: 100,
    numpad5: 101,
    numpad6: 102,
    numpad7: 103,
    numpad8: 104,
    numpad9: 105,
    multiply: 106,
    add: 107,
    subtract: 109,
    decimalPoint: 110,
    divide: 111,
    f1: 112,
    f2: 113,
    f3: 114,
    f4: 115,
    f5: 116,
    f6: 117,
    f7: 118,
    f8: 119,
    f9: 120,
    f10: 121,
    f11: 122,
    f12: 123,
    numLock: 144,
    scrollLock: 145,
    semiColon: 186,
    equalSign: 187,
    comma: 188,
    dash: 189,
    period: 190,
    forwardSlash: 191,
    graveAccent: 192,
    openBracket: 219,
    backSlash: 220,
    closeBracket: 221,
    singleQuote: 222
};
