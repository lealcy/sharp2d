"use strict";

class Ball extends Sprite {
    constructor() {
        super("images/Soccer_Ball.png");
    }

    start() {
        super.start();

    }

    update(scene) {
        super.update(scene);
        var kbd = scene.sharp2d.keyboard;
        if (kbd.keyDown(kbd.keys.RIGHT)) {
            this.x += 10;
        }
        if (kbd.keyDown(kbd.keys.DOWN)) {
            this.y += 10;
        }
        if (kbd.keyDown(kbd.keys.LEFT)) {
            this.x -= 10;
        }
        if (kbd.keyDown(kbd.keys.UP)) {
            this.y -= 10;
        }
        if (this.x > scene.sharp2d.width - this.width) {
            this.x = scene.sharp2d.width - this.width;
        }
        if (this.x < 0) {
            this.x = 0
        }
        if (this.y > scene.sharp2d.height - this.height) {
            this.y = scene.sharp2d.height - this.height;
        }
        if (this.y < 0) {
            this.y = 0;
        }
    }
}
