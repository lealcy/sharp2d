"use strict";

class FollowMouse extends Component {

    update() {
        var mouse = this.game.mouse;
        this.entity.transform.x = mouse.x;
        this.entity.transform.y = mouse.y;
    }
}
