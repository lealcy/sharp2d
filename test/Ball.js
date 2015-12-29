"use strict";

class Ball extends Sprite {
    constructor() {
        super("images/Soccer_Ball.png");
        this._onTheMove = false;
    }

    start() {
        super.start();

    }

    update(scene) {
        super.update(scene);
        var mouse = scene.sharp2d.mouse;
        var kbd = scene.sharp2d.keyboard;
        if (mouse.leftDown) {
            if (mouse.x >= this.x && mouse.y >= this.y &&
                mouse.x < (this.width + this.x) &&
                mouse.y < (this.height + this.y)) {
                this._onTheMove = true;
            }
            if (this._onTheMove) {
                this.centerOn(mouse.x, mouse.y);
            }
        }
        if (mouse.leftUp) {
            this._onTheMove = false;
        }
        if (mouse.wheelUp) {
            console.log("up");
            this.scale += 0.1;
        }
        if (mouse.wheelDown) {
            console.log("down");
            this.scale -= 0.1;
        }

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
