"use strict";

class Draw extends Entity {
    _start() {
        this.x = 10;
        this.y = 10;
        this.width = 100;
        this.height = 100;
        this.context.lineWidth = 1;
        this.pivot = this.pivots.center;
        this.mouse.ignoreOutEvent = true;
    }

    _update() {
        var ctx = this.context;

        if (this.mouse.leftDown) {
            this.x = this.mouse.x;
            this.y = this.mouse.y;
        }

        if (this.mouseOver) {
            console.log(this.mouse.x, this.mouse.y);
        }

        if (this.mouse.wheelUp) {
            this.scaleWidth += 0.1;
            this.scaleHeight += 0.1;
        }
        if (this.mouse.wheelDown) {
            this.scaleWidth -= 0.1;
            this.scaleHeight -= 0.1;
        }

        // The object
        ctx.strokeStyle = "Blue";
        ctx.strokeRect(this.x, this.y, this.width, this.height);

        // The absolute object
        /*ctx.strokeStyle = "Red";
        ctx.strokeRect(this.x, this.y, this.width, this.height);


        // The pivot
        ctx.strokeStyle = "Green";
        this.drawCross(this.pivotX, this.pivotY);
        ctx.beginPath();
        ctx.arc(this.pivotX, this.pivotY, 5, 0, 2 * Math.PI);
        ctx.stroke();*/
    }

    /*drawCross(x, y) {
        var ctx = this.context;
        ctx.beginPath();
        ctx.moveTo(x - 15, y);
        ctx.lineTo(x + 15, y);
        ctx.moveTo(x, y - 15);
        ctx.lineTo(x, y + 15);
        ctx.stroke();
    }*/
}
