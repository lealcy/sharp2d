"use strict";

class Ball extends Entity {
    constructor(gameInstance) {
        super(gameInstance);
        this.sprite = new Sprite("images/test_sprite.png");
        this.onTheMove = false;
        this.x = 100;
        this.y = 100;
        this.pivot = this.pivots.center;
    }

    update() {
        var mouse = this.gameInstance.mouse;
        var kbd = this.gameInstance.keyboard;
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
            this.scaleWidth += 0.1;
            this.scaleHeight += 0.1;
        }
        if (mouse.wheelDown) {
            this.scaleWidth -= 0.1;
            this.scaleHeight -= 0.1;
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
