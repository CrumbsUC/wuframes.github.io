// scripts.js

// Basic three.js setup
const canvas = document.getElementById('glassesCanvas');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(canvas.clientWidth, canvas.clientHeight);

// Set up controls for rotating, zooming, and panning
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // smooth controls
controls.dampingFactor = 0.1;
controls.enableZoom = true;
controls.enablePan = true;

// Lighting setup
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft light
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8); // Focused light
directionalLight.position.set(10, 10, 10).normalize();
scene.add(directionalLight);

// Placeholder object (a box) to visualize the 3D space until model is added
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0x47d19e });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Camera positioning
camera.position.z = 5;

// Render loop
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

// Adjust canvas size on window resize
window.addEventListener('resize', () => {
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
});

// Start the render loop
animate();
