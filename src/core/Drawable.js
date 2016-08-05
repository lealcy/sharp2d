"use strict";

class Drawable extends BaseObject {
    constructor(...args) {
        super(...args);
        this.transform = this.instaciate(BaseObject);
    }

    update(canvas) {
        canvas.saveContext();
    }

    lateUpdate(canvas) {
        canvas.restoreContext();
    }
}