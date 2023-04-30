
import ThreeModule from '../threeModule.mjs';
import EventEmitter from './EventEmitter.js';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export default class Resources extends EventEmitter {
    constructor() {
        super();
        this.threeModule = new ThreeModule();
        this.renderer = this.threeModule.renderer;
        this.items = {};

        this.loadScene()
            .then((scene) => {
                this.items = scene;
                this.emit('loadedScreen', this.items);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    loadScene() {
        return new Promise((resolve, reject) => {
            const loader = new GLTFLoader();
            loader.load('models/room.glb', (file) => {
                resolve(file.scene);
            }, undefined, (error) => {
                reject(error);
            });
        });
    }
}