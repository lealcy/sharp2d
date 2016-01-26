"use strict";

// import "../src/sharp2d/Sharp2d.js";

/* export */
class Game extends Sharp2d {
    constructor(canvasElement) {
        super(canvasElement);
        this.ball = new Ball(this, "images/test_sprite.png");
        this.scene.add(this.ball);
    }
}
