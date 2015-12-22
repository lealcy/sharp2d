"use strict";

// import "../src/sharp2d/Sharp2d.js";

/* export */
class Game extends Sharp2d {
    constructor(canvasElement) {
        super(canvasElement);
        this.ball = new Sprite(this.scene, "images/Soccer_Ball.png");
        this.scene.add(this.ball);
    }
}
