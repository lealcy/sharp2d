"use strict";

class Ball extends Sprite {
    constructor() {
        super("images/test_sprite.png");
        this._onTheMove = false;
        this.x = 100;
        this.y = 100;
        this._pivot = this.pivots.center;
    }

    start() {
        super.start();
    }

    update(scene) {
        super.update(scene);
        var mouse = scene.gameInstance.mouse;
        var kbd = scene.gameInstance.keyboard;
        if (mouse.leftDown) {
            if (mouse.x >= this.x && mouse.y >= this.y &&
                mouse.x < (this.width + this.x) &&
                mouse.y < (this.height + this.y)) {
                this._onTheMove = true;
            }
            if (this._onTheMove) {
                this.x = mouse.x;
                this.y = mouse.y;
            }
        }
        if (mouse.leftUp) {
            this._onTheMove = false;
        }
        if (mouse.wheelUp) {
            this.scale += 0.1;
        }
        if (mouse.wheelDown) {
            this.scale -= 0.1;
        }

        if (kbd.keyDown(kbd.keys.right)) {
            this.x += 10;
        }
        if (kbd.keyDown(kbd.keys.down)) {
            this.y += 10;
        }
        if (kbd.keyDown(kbd.keys.left)) {
            this.x -= 10;
        }
        if (kbd.keyDown(kbd.keys.up)) {
            this.y -= 10;
        }
    }
}
