import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// scene
const scene = new THREE.Scene();

// view port size
const viewPort = {
	width: window.innerWidth,
	height: window.innerHeight,
};
let spaceship: any = null;

// model
const gltfLoader = new GLTFLoader();
gltfLoader.load("./models/space_fighter/scene.gltf", (gltf) => {
	gltf.scene.scale.set(0.025, 0.025, 0.025);
	spaceship = gltf.scene;
	scene.add(spaceship);
});

// camera
const camera = new THREE.PerspectiveCamera(
	75,
	viewPort.width / viewPort.width,
	0.1,
	1000
);
scene.add(camera);
camera.position.set(0, 0, 10);

// lights
const ambientlight = new THREE.AmbientLight("#FFFFFF", 10); // soft white light
scene.add(ambientlight);
const light = new THREE.DirectionalLight("#FFFFFF", 1);
light.position.set(1, 1, 10);
scene.add(light);

// controls
const controls = new OrbitControls(
	camera,
	document.querySelector(".webgl") as HTMLElement
);
controls.enableDamping = true;

// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshStandardMaterial({ color: "red" });
// const cube = new THREE.Mesh(geometry, material);
// cube.position.set(0, 0, 0);

// scene.add(cube);

// renderer
const renderer = new THREE.WebGLRenderer({
	canvas: document.querySelector(".webgl") as HTMLCanvasElement,
});
renderer.setSize(viewPort.width, viewPort.height);

renderer.render(scene, camera);

// resize
window.addEventListener("resize", () => {
	//window size
	viewPort.width = window.innerWidth;
	viewPort.height = window.innerHeight;

	// camera
	camera.aspect = viewPort.width / viewPort.height;
	camera.updateProjectionMatrix();

	//rendere
	renderer.setSize(viewPort.width, viewPort.height);
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// animate
function animate() {
	renderer.render(scene, camera);
	requestAnimationFrame(animate);
	controls.update();
	spaceship.rotation.y += 0.01;
	// camera.lookAt(cube.position);
}
animate();
