let scene, camera, renderer;

function init() {
    scene = new THREE.Scene;

    camera = new THREE.PerspectiveCamera(55, window.innerWidth/window.innerHeight, 45, 3000)
    camera.position.set(-900, -200, -900);

    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    let controls = new THREE.OrbitControls(camera);
    controls.addEventListner('change',renderer);

    let materialArray = [];
    let texture_ft = new THREE.TextureLoader().load
}