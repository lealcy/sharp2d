"use strict";

class Game {
    constructor(HTMLCanvasElement) {
        Game.instance = this;
        this.instances = [];
        this.canvas = this.instanciate(CanvasRenderer, HTMLCanvasElement);
        this.keyboard = this.instanciate(Keyboard, HTMLCanvasElement);
        this.mouse = this.instanciate(Mouse, HTMLCanvasElement);

    }

    instanciate(classObject, ...args) {
        let obj = new classObject(this, this, ...args);
        this.instances.push(obj);
        return obj;
    }

    remove(classObject) {
        this.instances.splice(this.instances.indexOf(classObject), 1);
    }

    callEvent(eventName, ...args) {
        if (eventName === "enterFrame") {
            this.callEvent("update", ...args);
            this.instances.forEach(function(obj) {
                obj.callEvent(eventName, ...args);
            });
            this.callEvent("lateUpdate", ...args);
        }
        this.instances.forEach(function(obj) {
            obj.callEvent(eventName, ...args);
        });
    }

    start(...args) {
        this.callEvent("start", ...args);
    }
}