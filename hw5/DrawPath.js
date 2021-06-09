function drawPath(sx, sy, ex, ey, radius) {
    let pS = new THREE.Vector3(sx, sy, -1);
    let pE = new THREE.Vector3(ex, ey, -1);

    let end = new THREE.Mesh(new THREE.CircleGeometry(radius, 20), new THREE.MeshBasicMaterial({
        color: 'red',
        transparent: true,
        opacity: 0.1
    }));
    let end2 = end.clone();
    end.position.copy(pS);
    end2.position.copy(pE);
    scene.add(end, end2);

    let path = new THREE.Mesh(new THREE.PlaneGeometry(pS.distanceTo(pE), 1.75 * radius), new THREE.MeshBasicMaterial({
        color: 'yellow',
        transparent: true,
        opacity: 0.2
    }));
    scene.add(path);

    let center = pS.clone().add(pE).multiplyScalar(0.5); // (pS+pE)/2
    path.position.copy(center);
    let p = pE.clone().sub(pS); // pE-pS
    let angle = Math.atan2(p.y, p.x);
    path.rotation.z = angle;
}