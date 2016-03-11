"use strict";

class TextTransform extends Transform {
    constructor(name) {
        super(name);
    }

    beforeUpdate() {
        super.beforeUpdate(...arguments);
        var renderer = this.game.renderer;

    }

    afterUpdate() {
        // CODE HERE!
        super.afterUpdate(...arguments);
    }

    defaults() {
        super.defaults();
        this._font = new Font();
        this._align = 
        this._direction = this.directions.inherit;
    }

    get direction() {
        return this._direction;
    }
    
    set direction(value) {
        this._direction = value;
    }

    static get directions() {
        return TextTransform.prototype._directions;
    }

}

TextTransform.prototype._alignments = {
    left: 
};

TextTransform.prototype._directions = {
    ltr: "ltr",
    rtl: "rtl",
    inherit: "inherit",
};