"use strict";

class Transform {
    cosntructor(position, rotation, scale) {
        this.position = position || Vector.zero;
        this.rotation = rotation || 0;
        this.scale = scale || Vector.one;
        this.pivot = Vector.zero;
        this.parent = null;
    }

    rotate(angle) {
        this.rotation += angle;
    }

    toString() {
        return `Transform(position: ${this.position}, rotation: ${this.rotation}, scale: ${this.scale})`;
    }
}