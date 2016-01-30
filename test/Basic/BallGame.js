"use strict";

class BallGame extends Game {

    _init() {
        this.debug("BallGame._init");
        this.ball = new Ball(this, "images/Soccer_Ball.png");
    }

}
