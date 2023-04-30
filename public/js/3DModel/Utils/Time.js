import EventEmitter from "./EventEmitter.js";


export default class Time extends EventEmitter {
    constructor() {
        super();
        this.update();
    }

    update() {
        this.emit("update");
        window.requestAnimationFrame(() => this.update());
    }
}