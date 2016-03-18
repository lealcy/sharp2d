"use strict";

class Text extends Entity {
    constructor(name, text) {
        super(name);
        this._text = text || this.name;
        
    }
    
    get text() {
        return this._text;
    }
    
    set text(value) {
        this._text = value;
    }
    
    _animationFrame() {
        //this.game
    }
}