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
        this._align = this.defaultAlignment;
        this._baseline = this.defaultBaseline;
        this._direction = this.defaultDirection;
    }

    get direction() {
        return this._direction;
    }
    
    set direction(value) {
        this._direction = value;
    }
    
    static get alignments() {
        return TextTransform.prototype._alignments;
    }
    
    static get baselines() {
        return TextTransform.prototype._baselines;
    }

    static get directions() {
        return TextTransform.prototype._directions;
    }

}

TextTransform.prototype._alignments = {
    left: "left",
    right: "right",
    center: "center",
    start: "start",
    end: "end", 
};

TextTransform.prototype._baselines = {
    top: "top",
    hanging: "hanging",
    middle: "middle",
    alphabetic: "alphabetic",
    ideographic: "ideographic",
    bottom: "bottom", 
}

TextTransform.prototype._directions = {
    ltr: "ltr",
    rtl: "rtl",
    inherit: "inherit",
};