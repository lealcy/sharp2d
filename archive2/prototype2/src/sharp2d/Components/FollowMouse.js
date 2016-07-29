"use strict";

class FollowMouse extends Behavior {
    beforeUpdate() {
        var mouse = this.game.mouse;
        if (mouse.moved) {
            this.entity.transform.x = mouse.x;
            this.entity.transform.y = mouse.y;
        }
    }
}
