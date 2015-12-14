"use strict";

// import "../src/sharp2d/Sharp2d.js";

/* export */
class Game extends Sharp2d {
    constructor(canvasElement) {
        super(canvasElement);
    }

    get toString() {
        return super.constructor.name + ":" + this.constructor.name;
    }
}
