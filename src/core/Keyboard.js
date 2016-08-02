"use strict";

class Keyboard extends BaseObject {
    constructor(game, parent, HTMLCanvasElement) {
        super(game, parent, "Keyboard");
        if (!Keyboard.Keys) {
            Keyboard.Keys =  {
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
        }
        this.keyDownList = new Set();
        this.keyUpList = new Set();
        this.ignoredKeys = new Set([Keyboard.Keys.f5, Keyboard.Keys.f12]);
        HTMLCanvasElement.addEventListener("keydown", this.keyDown.bind(this), false);
        HTMLCanvasElement.addEventListener("keyup", this.keyUp.bind(this), false);    
    }

    lateUpdate() {
        this.keyUpList.clear();
    }

    isKeyDown(keyCode) {
        return this.keyDownList.has(keyCode);
    }

    isKeyUp(keyCode) {
        return this.keyUpList.has(keyCode);
    }

    ignoreThisKey(keyCode) {
        this.ignoredKeys.add(keyCode);
    }

    dontIgnoreThisKey(keyCode) {
        this.ignoredKeys.delete(keyCode);
    }

    isKeyIgnored(keyCode) {
        return this.ignoredKeys.has(keyCode);
    }

    keyDown(e) {
        if(this.ignoredKeys.has(e.keyCode)) {
            return true;
        }
        e.preventDefault();
        this.keyDownList.add(e.keyCode);
        return false;
    }

    keyUp(e) {
        if(this.ignoredKeys.has(e.keyCode)) {
            return true;
        }
        e.preventDefault();
        this.keyDownList.delete(e.keyCode);
        this.keyUpList.add(e.keyCode);
        return false;
    }
}