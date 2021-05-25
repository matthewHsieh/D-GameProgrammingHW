function agentMesh() {
    // mesh facing +x

    let points = [];

    points.push(new THREE.Vector3(10, 0, 0), new THREE.Vector3(0, 0, -3),
        new THREE.Vector3(0, 0, 3), new THREE.Vector3(0, 3, 0));
    let geometry = new THREE.BufferGeometry().setFromPoints(points);

    let indices = [];
    indices.push(0, 3, 2, 0, 2, 1, 1, 3, 0, 1, 2, 3);
    geometry.setIndex(indices);
    geometry.computeFaceNormals();
    return new THREE.Mesh(geometry,
        //new THREE.MeshNormalMaterial());
        new THREE.MeshBasicMaterial({
            color: 'cyan',
            wireframe: true
        }))
}