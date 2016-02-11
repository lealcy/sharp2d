"use strict";

class Ball extends Sprite {
    _start() {
        this.onTheMove = false;
        this.originX = 0;
        this.originY = 0;
        this.x = 100;
        this.y = 100;
        this.pivot = this.pivots.center;
        this.mouse.ignoreOutEvent = true;
    }

    _update() {
        if (this.mouse.leftClick) {
            console.log("click");
            var newBall = this.clone();
            newBall.move(this.mouse.x, this.mouse.y);
            this.parent.add(newBall);
        }

        if (this.mouse.leftDown && !this.onTheMove && this.mouseOver) {
            this.originX = this.mouse.x - this.x;
            this.originY = this.mouse.y - this.y;
            this.onTheMove = true;
        }

        if (this.onTheMove) {
            this.move(this.mouse.x - this.originX, this.mouse.y - this.originY);
        }

        if (this.mouse.leftUp) {
            this.onTheMove = false;
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