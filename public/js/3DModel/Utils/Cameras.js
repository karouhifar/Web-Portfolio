import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import ThreeModule from "../threeModule.mjs";


export default class Cameras {
    constructor(scene) {
        this.threeModule = new ThreeModule();
        this.sizes = this.threeModule.sizes;
        this.scene = this.threeModule.scene;
        this.canvas = this.threeModule.canvas;

        this.createPerspectiveCamera();
        this.setOrbitControls();
    }
    createPerspectiveCamera() {
        this.perspectiveCamera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.perspectiveCamera.position.set(29, 30, 12)
        this.scene.add(this.perspectiveCamera);
    }

    setOrbitControls() {
        this.controls = new OrbitControls(this.perspectiveCamera, this.canvas);
        this.controls.enableDamping = true;
        this.controls.enableZoom = false;
    }

    resize() {
        // Updating Perspective Camera on Resize
        this.perspectiveCamera.aspect = this.sizes.aspect;
        this.perspectiveCamera.updateProjectionMatrix();
    }

    update() {
        this.controls.update();
    }
}
