"use strict";

class Entity {
    constructor(parent) {
        this.debug("Entity.constructor");
        if (parent) {
            this._parent = parent;
            this._parent.add(this);
        }
        this._children = [];
        this._x = 0;
        this._y = 0;
        this._width = 0;
        this._height = 0;
        this._enabled = true;
        this._scaleWidth = 1.0;
        this._scaleHeight = 1.0;
        this._pivot = this.pivots.topLeft;
        this._init();
    }

    start() {
        this.debug("Entity.start");
        if (this._beforeStart()) {
            this._start();
            this._afterStart();
        }
    }

    update() {
        //this.debug("Entity.update")
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
        this.parent.saveContext();
    }

    restoreContext() {
        this.parent.restoreContext();
    }

    add(child) {
        this.debug("Entity.add");
        this._children.push(child);
    }

    drawImage(image, x, y, width, height) {
        // this.debug("Entity.drawImage");
        this.parent.drawImage(...arguments);
    }

    debug(message) {
        console.log(this.constructor.name, ...arguments);
    }

    set x(value) {
        this._x = value;
    }

    get x() {
        return this._x;
    }

    set y(value) {
        this._y = value;
    }

    get y() {
        return this._y;
    }

    set width(value) {
        this._width = value;
    }

    get width() {
        return this._width;
    }

    set height(value) {
        this._height = value;
    }

    get height() {
        return this._height;
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

    set scaleWidth(value) {
        if (value >= 0) {
            this._scaleWidth = value;
        }
    }

    get scaleWidth() { return this._scaleWidth; }

    set scaleHeight(value) {
        if (value >= 0) {
            this._scaleHeight = value;
        }
    }

    get scaleHeight() { return this._scaleHeight; }

    get parent() {
        return this._parent;
    }

    get context() {
        return this.parent.context;
    }

    get mouse() {
        return this.parent.mouse;
    }

    get keyboard() {
        return this.parent.keyboard;
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
                return this._x + (this._width / 2);
                break;
            case this.pivots.topRight:
            case this.pivots.right:
            case this.pivots.bottomRight:
                return this._x + this._width;
                break;
            case this.pivots.bottomLeft:
            case this.pivots.left:
            case this.pivots.topLeft:
                return this._x;
                break;
            default:
                return this._x;
                break;
        }
    }

    get pivotY() {
        switch(this._pivot) {
            case this.pivots.top:
            case this.pivots.topRight:
            case this.pivots.topLeft:
                return this._y;
                break;
            case this.pivots.right:
            case this.pivots.left:
            case this.pivots.center:
                return this._y + (this._height / 2);
                break;
            case this.pivots.bottomRight:
            case this.pivots.bottom:
            case this.pivots.bottomLeft:
                return  this._y + this._height;
                break;
            default:
                return this._y;
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

    _init() {
        this.debug("Entity._init");
        // To be extended
    }

    _start() {
        this.debug("Entity._start");
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
        // this.debug("Entity._afterUpdate");
        this._children.forEach(child => child.update());
        this.restoreContext();
    }
}

Entity.prototype.pivots = {
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
