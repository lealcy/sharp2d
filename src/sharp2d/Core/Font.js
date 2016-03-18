"use strict";

class Font extends BaseObject {
    constructor(name) {
        super(name);
        this.defaults();
    }
    
    defaults() {
        this._style = Font.defaultStyle;
        this._variant = Font.defaultVariant;
        this._weight = Font.defaultWeight;
        this._lineHeight = Font.defaultLineHeight;
        this._size = Font.defaultSize;
        this._family = Font.defaultFamily;
        this._shorthand = "";
        this._updateShorthand();
        
    }
    
    get shorthand() {
        return this._shorthand;
    }
    
    get style() {
        return this._style;
    }
    
    set style(value) {
        this._style = value;
        this._updateShorthand();
    }
    
    get variant() {
        return this._variant;
    }
    
    set variant(value) {
        this._variant = value;
        this._updateShorthand();
    }
    
    get weight() {
        return this._weight;
    }
    
    set weight(value) {
        this._weight = value;
        this._updateShorthand();
    }
    
    get lineHeight() {
        return this._lineHeight;
    }
    
    set lineHeight(value) {
        this._lineHeight = value;
        this._updateShorthand();
    }
    
    get size() {
        return this._size;
    }
    
    set size(value) {
        this._size = value;
        this._updateShorthand();
    }
    
    get family() {
        return this._family;
    }
    
    set family(value) {
        this._family = value;
        this._updateShorthand();
    }
    
    static get defaultSize() {
        return Font.prototype._defaultSize;
    }
    
    static get defaultFamily() {
        return Font.prototype_defaultFamily;
    }
    
    static get styles() {
        return Font.prototype._styles;
    }
    
    static get variants() {
        return Font.prototype._variants;
    }

    static get weights() {
        return Font.prototype._weights;
    }

    static get lineHeights() {
        return Font.prototype._lineHeights;
    }

    static get sizes() {
        return Font.prototype._sizes;
    }
    
    _updateShorthand() {
        var shorthand = "";
        if (this._style) {
            shorthand += this._style + " ";
        }
        if (this._variant) {
            shorthand += this._variant + " ";
        }
        if (this._weight) {
            shorthand += this._weight + " ";
        }
        shorthand += this.size || Font.defaultSize;
        if (this._lineHeight) {
            shorthand += "/" + this._lineHeight;
        }
        shorthand += " " + (this._family || Font.defaultFamily);
        this._shorthand = shorthand;
    }
}

Font.prototype._defaultSize = Font.prototype._sizes.medium;

Font.prototype._defaultFamily = "arial, sans serif";

Font.prototype._styles = {
    normal: "normal",
    italic: "italic",
    oblique: "oblique",
};

Font.prototype._variants = {
    normal: "normal",
    smallCaps: "small-caps",
};

Font.prototype._weights = {
    normal: "normal",
    bold: "bold",
    bolder: "bolder",
    lighter: "lighter",
    thin: "100",
    extraLight: "200",
    light: "300",
    medium: "500",
    semiBold: "600",
    extraBold: "800",
    black: "900",
};

Font.prototype._lineHeights = {
    normal: "normal",
};

Font.prototype._sizes = {
    medium: "medium",
    xxSmall: "xx-small",
    xSmall: "x-small",
    small: "small",
    large: "large",
    xLarge: "x-large",
    xxLarge: "xx-large",
    smaller: "smaller",
    larger: "larger",
    initial: "initial",
    inherit: "inherit",
};