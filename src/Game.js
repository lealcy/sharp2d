"use strict";

class Game {
    constructor(HTMLCanvasElement) {
        Game.instance = this;
        this.instances = [];
        this.canvas = this.instanciate(CanvasRenderer, HTMLCanvasElement);
        this.keyboard = this.instanciate(Keyboard, HTMLCanvasElement);
        this.mouse = this.instanciate(Mouse, HTMLCanvasElement);
        this.world = this.instanciate(BaseObject);
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
        this.instances.forEach(function(obj) {
            obj.callEvent(eventName, ...args);
        });

        // Set update() event to call after EnterFrame because I'm not sure when to call it proper yet.
        if (eventName === "enterFrame") {
            this.instances.forEach(function(obj) {
                obj.callEvent("update", ...args);
            });
        }
    }

    start(...args) {
        this.callEvent("start", ...args);
    }
}