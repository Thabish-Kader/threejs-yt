import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// scene
const scene = new THREE.Scene();

// view port size
const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
};

// resize
window.addEventListener("resize", () => {
	//window size
	sizes.width = window.innerWidth;
	sizes.height = window.innerHeight;

	// camera
	camera.aspect = sizes.width / sizes.height;
	camera.updateProjectionMatrix();

	//rendere
	renderer.setSize(sizes.width, sizes.height);
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// camera
const camera = new THREE.PerspectiveCamera(
	75,
	sizes.width / sizes.width,
	0.1,
	1000
);
scene.add(camera);
camera.position.set(0, 0, 2);

// controls
const controls = new OrbitControls(
	camera,
	document.querySelector(".webgl") as HTMLElement
);
controls.enableDamping = true;
// objects
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "red" });
const cube = new THREE.Mesh(geometry, material);
cube.position.set(0, 0, 0);

scene.add(cube);

// renderer
const renderer = new THREE.WebGLRenderer({
	canvas: document.querySelector(".webgl") as HTMLCanvasElement,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

function animate() {
	renderer.render(scene, camera);
	requestAnimationFrame(animate);
	controls.update();

	camera.lookAt(cube.position);
}
animate();
