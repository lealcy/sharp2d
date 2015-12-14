"use strict";

// import "Mouse.js";
// import "Keyboard.js";
// import "Scene.js";

/* export */ var mouse;
/* export */ var keyboard;
/* export */ var defaultScene;

/* export */
class Sharp2d {
    constructor(canvasElement) {
        this.canvas = canvasElement;
        this.context = this.canvas.getContext("2d");
        mouse = new Mouse(this.canvas);
        keyboard = new Keyboard(this.canvas);
        defaultScene = new Scene();
        this.scene = defaultScene;
    }

    start() {

    }

    get toString() {
        return this.constructor.name;
    }
}
