"use strict";

class GameObject {

    // tag must be unique and is immutable
    constructor(name) {
        this.name = name;
        this.transform = new Transform();
    }
}