"use strict";

class Gravity extends Component {
    constructor(name, entity, acceleration) {
        super(name, entity);
        this._acceleration = acceleration || 0.5;
        this._vy = 0;
    }

    update() {
        this._vy += this._acceleration;
        this.entity.transform.y += this._vy;
    }
}
