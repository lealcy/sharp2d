"use strict";

class Pivot extends Component {
    constructor(name, entity) {
        super(name, entity);
        this._pivot = this.pivots.topLeft;
        this._x = 0;
        this._y = 0;
    }

    beforeUpdate() {
        this.game.drawSurface.saveContext();
        this.game.drawSurface.translate(this._x, this._y);
    }

    afterUpdate(game, entity) {
        this.game.drawSurface.restoreContext();
    }

    get pivot() {
        return this._pivot;
    }

    set pivot(value) {
        this._pivot = value;
        this._updatePivot();
    }

    get x() {
        return this._y;
    }

    get y() {
        return this._y;
    }

    get entity() {
        return this._entity;
    }

    _updatePivot() {
        switch(this._pivot) {
            case this.pivots.top:
                this._x = -(this._entity.width / 2);
                this._y = 0;
                break;
            case this.pivots.topRight:
                this._x = -this._entity.width;
                this._y = 0;
                break;
            case this.pivots.right:
                this._x = -this._entity.width;
                this._y = -(this._entity.height / 2);
                break;
            case this.pivots.bottomRight:
                this._x = -this._entity.width;
                this._y = -this._entity.height;
                break;
            case this.pivots.bottom:
                this._x = -(this._entity.width / 2);
                this._y = -this._entity.height;
                break;
            case this.pivots.bottomLeft:
                this._x = 0;
                this._y = -this._entity.height;
                break;
            case this.pivots.left:
                this._x = 0;
                this._y = -(this._entity.height / 2);
                break;
            case this.pivots.topLeft:
                this._x = 0;
                this._y = 0;
                break;
            case this.pivots.center:
                this._x = -(this._entity.width / 2);
                this._y = -(this._entity.height / 2);
                break;
            default:
                this._x = 0;
                this._y = 0;
                break;
        }
    }
}

Pivot.prototype.pivots = {
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
