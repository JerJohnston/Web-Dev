
var SphereGrid = function(){

    var me = this; 

    var camera,
        cameraController,
        scene,
        renderer;

    var container,
        light,
        sphereGeom,
        sphereMaterial,
        sphereMesh;

    function init(){

        container = document.createElement("div");
        container.id = "MyThreeJsScene";
        document.body.appendChild(container);

        scene = new THREE.scene();

        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setClearColor(0X000000);
        renderer.setSize(window.innerWidth,window.innerHeight);
        container.appendChild(renderer.domElement);

        camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000);
        camera.position.set(0,100,300);

        cameraController = new THREE.OrbitControls(camera, renderer.domElement);
        cameraController.target.set(0,0,0);
        cameraController.enableDamping = true;
        cameraController.dampingFactor = 0.05;
        cameraController.rotateSpeed = 0.045;

        
        buildScene();

        render();
    }

    function buildScene(){
        var gridHelper = new THREE.GridHelper(100,10);
        scene.add(gridHelper);

        light = new THREE.DirectionalLight(0xFFFFFF, 1);

        sphereGeom = new THREE.SphereGeometry(10,4,4);
        sphereMaterial = new Three.MeshPhongMaterial({color:0xCC0000});
        sphereMaterial.specular = new Three.Color(255,255,255);
        sphereMesh = new THREE.Mesh(sphereGeom, sphereMaterial);
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
    new SphereGrid();

}



