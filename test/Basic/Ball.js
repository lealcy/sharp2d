"use strict";

class Ball extends Sprite {
    start() {
        this.onTheMove = false;
        this.x = 100;
        this.y = 100;
        this.pivot = this.pivots.center;
    }

    update() {
        if (this.mouseOver) {
            if (this.mouse.leftDown) {
                if (this.mouseOver) {
                    this._onTheMove = true;
                }
                if (this._onTheMove) {
                    this.x = this.mouse.x;
                    this.y = this.mouse.y;
                }
            }
            if (this.mouse.leftUp) {
                this._onTheMove = false;
            }
            if (this.mouse.wheelUp) {
                this.scaleWidth += 0.1;
                this.scaleHeight += 0.1;
            }
            if (this.mouse.wheelDown) {
                this.scaleWidth -= 0.1;
                this.scaleHeight -= 0.1;
            }
        }

        if (this.keyboard.keyDown(this.keyboard.keys.right)) {
            this.x += 10;
        }
        if (this.keyboard.keyDown(this.keyboard.keys.down)) {
            this.y += 10;
        }
        if (this.keyboard.keyDown(this.keyboard.keys.left)) {
            this.x -= 10;
        }
        if (this.keyboard.keyDown(this.keyboard.keys.up)) {
            this.y -= 10;
        }
    }
}
