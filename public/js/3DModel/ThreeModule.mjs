import * as THREE from "three"
import Cameras from "./Utils/Cameras.js";
import Sizes from "./Utils/Sizes.js";
import Renderer from "./Utils/Renderer.js";
import Resources from "./Utils/Resources.js";
import Time from "./Utils/Time.js";




export default class ThreeModule {

    static initialInstance;

    constructor(canvas) {
        console.log("initialInstance", ThreeModule.initialInstance)
        if (ThreeModule.initialInstance) {
            return ThreeModule.initialInstance;
        }
        ThreeModule.initialInstance = this;
        this.canvas = canvas;
        // --- Scene === Container
        this.scene = new THREE.Scene();
        // --- Updating every seconds of 3d model interface animation
        this.time = new Time();
        // --- responsive sizes of width and Aspect ratios of model
        this.sizes = new Sizes();
        // --- OrbitControls and PerspectiveCamera vision & rendering camera and canvas
        this.cameras = new Cameras();
        this.renderer = new Renderer();
        // --- getting meshes of Blender 3d Model
        this.resources = new Resources();
        // --- Rendering end-Result
        this.scene.add(this.resources.items)

        const pointLight = new THREE.PointLight(0xffffff);
        const AmbientLight = new THREE.AmbientLight(0xffffff);
        const gridHelper = new THREE.GridHelper(200, 50);
        pointLight.position.set(20, 20, 20).normalize();
        this.scene.add(pointLight, AmbientLight, gridHelper);

        this.time.on("update", () => {
            this.update();
        });

        this.resources.on("loadedScreen", (item) => {
            this.scene.add(item);
        });

    }

    update() {
        this.cameras.update();
        this.renderer.update();
    }

}