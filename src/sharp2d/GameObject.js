"use strict";

class GameObject {
    constructor(parent) {
        this._children = [];
        this._parent = this;
        if (parent) {
            this._parent = parent;
            this._parent.add(this);
        }
        this._x = 0;
        this._y = 0;
        this._width = 0;
        this._height = 0;
        this._enabled = true;
        this._scaleWidth = 1.0;
        this._scaleHeight = 1.0;
        this._pivot = this.pivots.topLeft;
        this._transform = new Transform();
    }

    start() {
        if (this._beforeStart()) {
            this._start();
            this._afterStart();
        }
     }

    update() {
        if (this._beforeUpdate()) {
            this._update();
            this._afterUpdate();
        }
    }

    scale(width, height) {
        if (width >= 0 && height >= 0) {
            this._scaleWidth = width;
            this._scaleHeight = height;
        }
    }

    saveContext() {
        if (this._parent !== this) {
            this._parent.saveContext();
        } else {
            this.error("saveContext() must be defined.");
        }
    }

    restoreContext() {
        if (this._parent !== this) {
            this._parent.restoreContext();
        } else {
            this.error("restoreContext() must be defined.");
        }
    }

    add(child) {
        this._children.push(child);
    }

    drawImage(image, x, y, width, height) {
        if (this._parent !== this) {
            this._parent.drawImage(...arguments);
        } else {
            this.error("drawImage() must be defined.");
        }
    }

    log(message) {
        return console.log(this.constructor.name, "->", ...arguments);
    }

    error(message) {
        return console.error(this.constructor.name, "->", ...arguments);
    }

    clone() {
        return Object.create(this);
    }

    move(x, y) {
        this.x = x;
        this.y = y;
    }

    get x() {
        return (this.parent === this ? this._x : this._x + this.parent.x) +
            this.pivotX;
    }

    set x(value) {
        this._x = value;
    }

    get y() {
        return (this.parent === this ? this._y : this._y + this.parent.y) +
            this.pivotY;
    }

    set y(value) {
        this._y = value;
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

    get enable() {
        return this._enabled = true;
    }

    get disable() {
        return this._enabled = false;
    }

    get enabled() {
        return this._enabled;
    }

    get scaleWidth() {
        return this._scaleWidth;
    }

    set scaleWidth(value) {
        if (value >= 0) {
            this._scaleWidth = value;
        }
    }

    get scaleHeight() {
        return this._scaleHeight;
    }

    set scaleHeight(value) {
        if (value >= 0) {
            this._scaleHeight = value;
        }
    }

    get parent() {
        return this._parent;
    }

    get context() {
        if (this._parent !== this) {
            return this._parent.context;
        }
        this.error("context property must be defined.");
        return false;
    }

    get mouse() {
        if (this._parent !== this) {
            return this._parent.mouse;
        }
        this.error("mouse property must be defined.");
        return false;
    }

    get keyboard() {
        if (this._parent !== this) {
            return this._parent.keyboard;
        }
        this.error("keyboard property must be defined.");
        return false;
    }

    get pivot() {
        return this._pivot;
    }

    set pivot(value) {
        this._pivot = value;
    }

    get pivotX() {
        switch(this._pivot) {
            case this.pivots.top:
            case this.pivots.bottom:
            case this.pivots.center:
                return -(this._width / 2);
                break;
            case this.pivots.topRight:
            case this.pivots.right:
            case this.pivots.bottomRight:
                return -this._width;
                break;
            case this.pivots.bottomLeft:
            case this.pivots.left:
            case this.pivots.topLeft:
                return 0;
                break;
            default:
                return 0;
                break;
        }
    }

    get pivotY() {
        switch(this._pivot) {
            case this.pivots.top:
            case this.pivots.topRight:
            case this.pivots.topLeft:
                return 0;
                break;
            case this.pivots.right:
            case this.pivots.left:
            case this.pivots.center:
                return -(this._height / 2);
                break;
            case this.pivots.bottomRight:
            case this.pivots.bottom:
            case this.pivots.bottomLeft:
                return -this._height;
                break;
            default:
                return 0;
                break;
        }
    }

    get mouseOver() {
            if (this.mouse.x >= this.x && this.mouse.y >= this._y &&
                this.mouse.x < this.x + this._width &&
                this.mouse._y < this.y + this._height) {
                return true;
            }
            return false;
    }

    _start() {
        // To be extended
    }

    _update() {

        // To be extended
    }

    _beforeStart() {
        return this.enabled;
    }

    _afterStart() {
        this._children.forEach(child => child.start());
    }

    _beforeUpdate() {
        if (!this.enabled) {
            return false;
        }
        this.saveContext();
        return true;
    }

    _afterUpdate() {
        this._children.forEach(child => child.update());
        this.restoreContext();
    }
}

GameObject.prototype.pivots = {
    center: Symbol("center"),
    top: Symbol("top"),
    topRight: Symbol("topRight"),
    right: Symbol("right"),
    bottomRight: Symbol("bottomRight"),
    bottom: Symbol("bottom"),
    bottomLeft: Symbol("bottomLeft"),
    left: Symbol("left"),
    topLeft: Symbol("topLeft"),
};
