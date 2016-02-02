"use strict";

class BallGame extends Game {
    constructor(canvasElement) {
        super(canvasElement);
        this.ball = new Ball(this, "images/Soccer_Ball.png");
    }
}
