"use strict";

class Gravity extends Component {
    constructor(name, entity, acceleration, terminalVelocity) {
        super(name, entity);
        this._acceleration = acceleration || 1.1;
        this._terminalVelocity = terminalVelocity || 14;
        this._vy = this._acceleration;
    }

    beforeUpdate() {
        this._vy *= this._acceleration;
        this.entity.transform.y += this._vy < this._terminalVelocity ?
            this._vy : this._terminalVelocity;
    }
}
