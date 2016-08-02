"use strict";

class BaseObject {
    constructor(game, parent, tag) {
        this.tag = tag;
        this.parent = parent;
        this.game = game;
        this.instances = [];
        this.layer = 0;
        this.started = false;
    }

    instanciate(classObject, ...args) {
        let obj = new classObject(this, this, ...args);
        this.instances.push(obj);
        this.sortLayers();
        return obj;

    }

    remove(classObject) {
        this.instances.splice(this.instances.indexOf(classObject), 1);
    }

    callEvent(eventName, ...args) {
        if (!this.started) {
            if (eventName === "start") {
                this.callEvent("setup", ...args);
                this.started = true;
            } else if (eventName !== "setup") {
                throw new Error("Event called on a non started object.");
            }
        }
        this[eventName](...args);
        this.instances.forEach(function(obj) {
            obj.callEvent(eventName, ...args); 
        });
    }

    sortLayers() {
        this.instances.sort(function(a, b) {
            return a.layer - b.layer;
        });
    }

    // Events
    setup() {} // Called one time before the first start() call.    
    start() {} // Called every time a scene is started.
    stop() {} // Called every time a scene is stopped.
    update() {} // Called before the frame is updated.
    enterFrame() {} // Called every time the frame is updated.
    lateUpdate() {} // Called after the frame is updated.

}