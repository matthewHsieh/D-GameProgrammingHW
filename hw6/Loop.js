function make3JSLoop() {
    let points = [];
    for (let i = 0; i < arguments.length; i++)
        points.push(new THREE.Vector3(arguments[i].x, arguments[i].y, 0));

    var geometry = new THREE.BufferGeometry();
    geometry.setFromPoints(points);
    var border = new THREE.Line(geometry, new THREE.LineBasicMaterial({
        color: 0xff00ff
    }));
    scene.add(border);
}