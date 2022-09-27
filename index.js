
let scene, camera, renderer;

function init() {

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdddddd);

    let loade = new THREE.TextureLoader()
    loade.load("../da.png", function(texture){
        scene.background = texture
    })

    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 5000);
    camera.rotation.y = 45 / 180 * Math.PI;
    camera.position.x = 800;
    camera.position.y = 200;
    camera.position.z = 1000;



    hlight = new THREE.AmbientLight(0x404040, 5);
    scene.add(hlight);

    directionalLight = new THREE.DirectionalLight(0xffffff, 10);
    directionalLight.position.set(0, 1, 0);
    directionalLight.castShadow = true;
    scene.add(directionalLight);
    light = new THREE.PointLight(0xc4c4c4, 50);
    light.position.set(0, 1000, 5);
    scene.add(light);
    light2 = new THREE.PointLight(0xc4c4c4, 5);
    light2.position.set(0, 4000, 1);
    scene.add(light2);
    light3 = new THREE.PointLight(0xc4c4c4, 5);
    light3.position.set(0, 100, 1);
    scene.add(light3);
    light4 = new THREE.PointLight(0xc4c4c4, 5);
    light4.position.set(0, 1000, 1);
    scene.add(light4);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    
    let loader = new THREE.GLTFLoader();
    loader.load('./model/scene.gltf', function (gltf) {
        car = gltf.scene.children[0];
        car.scale.set(40, 40, 40);
        car.rotation.z = 1
        car.position.y = -250
        car.position.x = -200
        scene.add(gltf.scene);
        animate();
    });

    loader.load('./calbo/scene.gltf', function (gltf) {
        car = gltf.scene.children[0];
        car.scale.set(3, 3, 3);
        car.rotation.z = 1
        car.position.y = -250
        car.position.x = -600
        scene.add(gltf.scene);
        animate();
    });

    const control = new THREE.OrbitControls( camera, renderer.domElement );
}


function animate() {
    renderer.render(scene, camera);
    requestAnimationFrame(animate); 
}


init();

