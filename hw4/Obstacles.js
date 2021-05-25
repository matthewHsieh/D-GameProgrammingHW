class Obstacle {
    constructor(center, size) {
        this.center = center.clone();
        let temp = new THREE.MeshBasicMaterial();
        temp.color.setHSL(0, 0, 0);
        this.mesh = new THREE.Mesh(new THREE.CylinderGeometry(size, size, 1, 20), temp);
        this.mesh.position.copy(center);
        this.size = size;
        scene.add(this.mesh)
    }
}