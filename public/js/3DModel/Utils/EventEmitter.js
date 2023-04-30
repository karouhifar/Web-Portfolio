export default class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
    }

    emit(eventName, ...args) {
        const event = this.events[eventName];
        if (event) {
            event.forEach(callback => callback(...args));
        }
    }

    off(eventName, callback) {
        const event = this.events[eventName];
        if (event) {
            const index = event.indexOf(callback);
            if (index !== -1) {
                event.splice(index, 1);
            }
        }
    }
}
