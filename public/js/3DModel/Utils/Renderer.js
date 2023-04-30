import * as THREE from "three";
import ThreeModule from "../threeModule.mjs";


export default class Renderer {
    constructor() {
        this.threeModule = new ThreeModule();
        this.sizes = this.threeModule.sizes;
        this.scene = this.threeModule.scene;
        this.canvas = this.threeModule.canvas;
        this.camera = this.threeModule.cameras;

        this.setRenderer();
    }

    setRenderer() {
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
        });
        this.renderer.setPixelRatio(this.sizes.pixelRatio);
        this.renderer.setSize(this.sizes.width, this.sizes.height);
    }

    update() {
        this.renderer.render(this.scene, this.camera.perspectiveCamera);
    }
}
