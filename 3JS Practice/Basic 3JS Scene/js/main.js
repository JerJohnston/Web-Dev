function Log(arg){ console.log(arg); }

var LessonThreeJS = function(){
   var me = this;

    var scene,
        renderer,
        camera,
        cameraController;
    
    var container, 
        light,
        sphereGeom,
        sphereMaterial,
        sphereMesh;

    function init(){

        container = document.createElement("div");
        container.id = "MyThreeJSScene";
        document.body.appendChild(container);
    
        scene = new THREE.Scene();
    
    
    
        renderer = new THREE.WebGLRenderer({ antialias: true});
        renderer.setClearColor(0x000000);
        renderer.setSize(window.innerWidth,window.innerHeight);
        container.appendChild(renderer.domElement);
    
        camera = new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,0.1,10000);
        camera.position.set(0,100,300);
    
        cameraController = new THREE.OrbitControls(camera,renderer.domElement);
        cameraController.target.set(0,0,0);
        cameraController.enableDamping = true;
        cameraController.dampingFactor = 0.025;
        cameraController.rotateSpeed = 0.05;
    
        

        buildScene();
    
        render();

    }

function buildScene(){
    var gridHelper = new THREE.GridHelper(250,25);
        scene.add(gridHelper);

    light = new THREE.DirectionalLight(0xFFFFFF,1.5);
    scene.add(light);

    sphereGeom = new THREE.SphereGeometry(25,25,25);
    sphereMaterial = new THREE.MeshPhongMaterial({color:0xCC0000});
    //sphereMaterial.wireframe = true;
    var specColor = 0.1;
    sphereMaterial.specular = new THREE.Color(specColor,specColor,specColor);
    sphereMesh = new THREE.Mesh(sphereGeom,sphereMaterial);
    sphereMesh.position.y = 40;

    scene.add(sphereMesh);
}

function render(){
    cameraController.update();
    renderer.render(scene,camera);

    requestAnimationFrame(render);
}

init();

   
};
    
function init(){
    new LessonThreeJS();
};
