"use strict";

class CanvasRenderer extends BaseObject {
    constructor(game, parent, HTMLCanvasElement) {
        super(game, parent, "Canvas");
        this.HTMLCanvasElement = HTMLCanvasElement;
        this.context = HTMLCanvasElement.getContext("2d");
        this.deltaTime = 0;
        this.timestamp = 0;
        this.frameCount = 0;
        this.lastTimestamp = 0;
    }

    start() {
        this.animate();
    }

    animate() {
        window.requestAnimationFrame(this.animationFrame.bind(this));
    }

    animationFrame(timestamp) {
        this.animate(); // Must be called first to setup the next frame update as soon as possible.
        this.timestamp = timestamp;
        this.deltaTime = (timestamp - this.lastTimestamp) / (1000 / 60);

        this.context.fillStyle = `rgba(${Math.floor(Math.random() * 256 * this.deltaTime)}, ${Math.floor(Math.random() * 256 * this.deltaTime)}, ${Math.floor(Math.random() * 256 * this.deltaTime)}, ${Math.random()})`;
        this.context.fillText(this.deltaTime, Math.random() * 800, Math.random() * 600);

        this.game.callEvent("enterFrame", this);
        this.lastTimestamp = timestamp;
        this.frameCount++;
    }
}