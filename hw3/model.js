function buildSteve() {
    /*
    head = buildHead();
    torso = buildTorso();
    torso.add(head);
    head.position.y = HH;
    scene.add(torso);
    torso.position.set(0, HH, 0);

    lLeg = buildLLeg();
    torso.add(lLeg);
    lLeg.position.set(WW / 2, 0, 0);
    rLeg = buildRLeg();
    torso.add(rLeg);
    rLeg.position.set(-WW / 2, 0, 0);
    */
    var loader = new THREE.TextureLoader();
    loader.setCrossOrigin('');
    texture = loader.load('https://i.imgur.com/1utWTdm.png');
    steve = new THREE.Group();
    head = buildHead(WW * 2, WW * 2, WW * 2);
    head.position.set(0, HH * 2, 0);
    body = buildBody(WW * 2, HH, WW);
    body.position.set(0, HH * 3 / 2, 0);
    legLeft = buildLeg(WW, HH, WW);
    legLeft.position.set(-WW / 2, HH, 0);
    legRight = buildLeg(WW, HH, WW);
    legRight.position.set(WW / 2, HH, 0);
    handLeft = buildHand(WW, HH, WW);
    handLeft.position.set(WW * 3 / 2, HH * 2, 0);
    handRight = buildHand(WW, HH, WW);
    handRight.position.set(-WW * 3 / 2, HH * 2, 0);
    steve.add(legLeft);
    steve.add(legRight);
    steve.add(body);
    steve.add(head);
    steve.add(handLeft);
    steve.add(handRight);
    /*
    torso = buildTorso();
    torso.add(steve);
    */
    /*
        torso = buildTorso();
        torso.add(head);
        head.position.y = HH;
        scene.add(torso);
        torso.position.set(0, HH, 0);

        lLeg = buildLLeg();
        torso.add(lLeg);
        lLeg.position.set(WW / 2, 0, 0);
        rLeg = buildRLeg();
        torso.add(rLeg);
        rLeg.position.set(-WW / 2, 0, 0);
    */


}
/*
function buildHead() {
    let head = new THREE.Group();
    let mesh = new THREE.Mesh(new THREE.BoxGeometry(2 * WW, 2 * WW, 2 * WW), new THREE.MeshNormalMaterial());
    head.add(mesh);
    mesh.position.y = WW;
    return head;
}

function buildLLeg() {
    let lLeg = new THREE.Group();
    let mesh = new THREE.Mesh(new THREE.BoxGeometry(WW, HH, WW), new THREE.MeshNormalMaterial());
    lLeg.add(mesh);
    mesh.position.y = -HH / 2;
    return lLeg;
}

function buildRLeg() {
    let rLeg = new THREE.Group();
    let mesh = new THREE.Mesh(new THREE.BoxGeometry(WW, HH, WW), new THREE.MeshNormalMaterial());
    rLeg.add(mesh);
    mesh.position.y = -HH / 2;
    return rLeg;
}
*/
function buildTorso() {
    let torso = new THREE.Group();
    let mesh = new THREE.Mesh(new THREE.BoxGeometry(2 * WW, HH, WW), new THREE.MeshNormalMaterial());
    torso.add(mesh);
    mesh.position.y = HH / 2;

    return torso;
}

function buildHead(WW, HH, DD) {
    var geometry = new THREE.BufferGeometry();
    var vertices = [];
    var indices = [];
    var uvs = [];

    ////////////
    const ww = 1;
    const hh = 3;
    const UU = 14 * ww;
    const VV = hh + 5 * ww;

    var a = {
        u: 2 * ww,
        v: hh + 5 * ww
    };
    var b = {
        u: 4 * ww,
        v: hh + 5 * ww
    };
    var c = {
        u: 6 * ww,
        v: hh + 5 * ww
    };
    var d = {
        u: 0,
        v: hh + 3 * ww
    };
    var e = {
        u: 2 * ww,
        v: hh + 3 * ww
    };
    var f = {
        u: 4 * ww,
        v: hh + 3 * ww
    };
    var g = {
        u: 6 * ww,
        v: hh + 3 * ww
    };
    var h = {
        u: 8 * ww,
        v: hh + 3 * ww
    };
    var i = {
        u: 0,
        v: hh + ww
    };
    var j = {
        u: 2 * ww,
        v: hh + ww
    };
    var k = {
        u: 4 * ww,
        v: hh + ww
    };
    var l = {
        u: 6 * ww,
        v: hh + ww
    };
    var m = {
        u: 8 * ww,
        v: hh + ww
    };

    // PZ
    vertices.push(-WW / 2, HH / 2, DD / 2, -WW / 2, -HH / 2, DD / 2, WW / 2, -HH / 2, DD / 2, WW / 2, HH / 2, DD / 2); // 0,3,2,1
    indices.push(0, 1, 2, 0, 2, 3);
    uvs.push(e.u / UU, e.v / VV, j.u / UU, j.v / VV, k.u / UU, k.v / VV, f.u / UU, f.v / VV); // e,j,k,f

    // PX
    vertices.push(WW / 2, HH / 2, DD / 2, WW / 2, -HH / 2, DD / 2, WW / 2, -HH / 2, -DD / 2, WW / 2, HH / 2, -DD / 2); // 1,2,6,5
    indices.push(4, 5, 6, 4, 6, 7); // [0,1,2, 0,2,3] + 4
    uvs.push(f.u / UU, f.v / VV, k.u / UU, k.v / VV, l.u / UU, l.v / VV, g.u / UU, g.v / VV); // f,k,l,g

    // NX
    vertices.push(-WW / 2, HH / 2, -DD / 2, -WW / 2, -HH / 2, -DD / 2, -WW / 2, -HH / 2, DD / 2, -WW / 2, HH / 2, DD / 2); // 4,7,3,0
    indices.push(8, 9, 10, 8, 10, 11); // [0,1,2, 0,2,3] + 8
    uvs.push(d.u / UU, d.v / VV, i.u / UU, i.v / VV, j.u / UU, j.v / VV, e.u / UU, e.v / VV); // d,i,j,e

    // NZ
    vertices.push(WW / 2, HH / 2, -DD / 2, WW / 2, -HH / 2, -DD / 2, -WW / 2, -HH / 2, -DD / 2, -WW / 2, HH / 2, -DD / 2); // 5,6,7,4
    indices.push(12, 13, 14, 12, 14, 15); // [0,1,2, 0,2,3] + 12
    uvs.push(g.u / UU, g.v / VV, l.u / UU, l.v / VV, m.u / UU, m.v / VV, h.u / UU, h.v / VV); // g,l,m,h

    vertices.push(-WW / 2, HH / 2, -DD / 2, -WW / 2, HH / 2, DD / 2, WW / 2, HH / 2, DD / 2, WW / 2, HH / 2, -DD / 2); // 4,0,1,5
    indices.push(16, 17, 18, 16, 18, 19); // [0,1,2, 0,2,3] + 16
    uvs.push(a.u / UU, a.v / VV, e.u / UU, e.v / VV, f.u / UU, f.v / VV, b.u / UU, b.v / VV); // a,e,f,b

    vertices.push(-WW / 2, -HH / 2, DD / 2, -WW / 2, -HH / 2, -DD / 2, WW / 2, -HH / 2, -DD / 2, WW / 2, -HH / 2, DD / 2); // 3,7,6,2
    indices.push(20, 21, 22, 20, 22, 23); // [0,1,2, 0,2,3] + 20
    uvs.push(b.u / UU, b.v / VV, f.u / UU, f.v / VV, g.u / UU, g.v / VV, c.u / UU, c.v / VV); // b,f,g,c

    geometry.setIndex(indices);
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));

    let headGroup = new THREE.Group();
    let head = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.DoubleSide
    }));
    headGroup.add(head);
    head.position.set(0, WW / 2, 0);
    return headGroup;

}

function buildBody(WW, HH, DD) {
    var geometry = new THREE.BufferGeometry();
    var vertices = [];
    var indices = [];
    var uvs = [];

    const ww = 1;
    const hh = 3;
    const UU = 14 * ww;
    const VV = hh + 5 * ww;

    var a = {
        u: 5 * ww,
        v: hh + ww
    };
    var b = {
        u: 7 * ww,
        v: hh + ww
    };
    var c = {
        u: 9 * ww,
        v: hh + ww
    };
    var d = {
        u: 4 * ww,
        v: hh
    };
    var e = {
        u: 5 * ww,
        v: hh
    };
    var f = {
        u: 7 * ww,
        v: hh
    };
    var g = {
        u: 8 * ww,
        v: hh
    };
    var h = {
        u: 10 * ww,
        v: hh
    };
    var i = {
        u: 4 * ww,
        v: 0
    };
    var j = {
        u: 5 * ww,
        v: 0
    };
    var k = {
        u: 7 * ww,
        v: 0
    };
    var l = {
        u: 8 * ww,
        v: 0
    };
    var m = {
        u: 10 * ww,
        v: 0
    };
    var x = {
        u: 9 * ww,
        v: hh
    };

    // PZ
    vertices.push(-WW / 2, HH / 2, DD / 2, -WW / 2, -HH / 2, DD / 2, WW / 2, -HH / 2, DD / 2, WW / 2, HH / 2, DD / 2); // 0,3,2,1
    indices.push(0, 1, 2, 0, 2, 3);
    uvs.push(e.u / UU, e.v / VV, j.u / UU, j.v / VV, k.u / UU, k.v / VV, f.u / UU, f.v / VV); // e,j,k,f

    // PX
    vertices.push(WW / 2, HH / 2, DD / 2, WW / 2, -HH / 2, DD / 2, WW / 2, -HH / 2, -DD / 2, WW / 2, HH / 2, -DD / 2); // 1,2,6,5
    indices.push(4, 5, 6, 4, 6, 7); // [0,1,2, 0,2,3] + 4
    uvs.push(f.u / UU, f.v / VV, k.u / UU, k.v / VV, l.u / UU, l.v / VV, g.u / UU, g.v / VV); // f,k,l,g

    // NX
    vertices.push(-WW / 2, HH / 2, -DD / 2, -WW / 2, -HH / 2, -DD / 2, -WW / 2, -HH / 2, DD / 2, -WW / 2, HH / 2, DD / 2); // 4,7,3,0
    indices.push(8, 9, 10, 8, 10, 11); // [0,1,2, 0,2,3] + 8
    uvs.push(d.u / UU, d.v / VV, i.u / UU, i.v / VV, j.u / UU, j.v / VV, e.u / UU, e.v / VV); // d,i,j,e

    // NZ
    vertices.push(WW / 2, HH / 2, -DD / 2, WW / 2, -HH / 2, -DD / 2, -WW / 2, -HH / 2, -DD / 2, -WW / 2, HH / 2, -DD / 2); // 5,6,7,4
    indices.push(12, 13, 14, 12, 14, 15); // [0,1,2, 0,2,3] + 12
    uvs.push(g.u / UU, g.v / VV, l.u / UU, l.v / VV, m.u / UU, m.v / VV, h.u / UU, h.v / VV); // g,l,m,h

    vertices.push(-WW / 2, HH / 2, -DD / 2, -WW / 2, HH / 2, DD / 2, WW / 2, HH / 2, DD / 2, WW / 2, HH / 2, -DD / 2); // 4,0,1,5
    indices.push(16, 17, 18, 16, 18, 19); // [0,1,2, 0,2,3] + 16
    uvs.push(a.u / UU, a.v / VV, e.u / UU, e.v / VV, f.u / UU, f.v / VV, b.u / UU, b.v / VV); // a,e,f,b

    vertices.push(-WW / 2, -HH / 2, DD / 2, -WW / 2, -HH / 2, -DD / 2, WW / 2, -HH / 2, -DD / 2, WW / 2, -HH / 2, DD / 2); // 3,7,6,2
    indices.push(20, 21, 22, 20, 22, 23); // [0,1,2, 0,2,3] + 20
    uvs.push(b.u / UU, b.v / VV, f.u / UU, f.v / VV, g.u / UU, g.v / VV, c.u / UU, c.v / VV); // b,f,g,c

    geometry.setIndex(indices);
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));

    let bodyGroup = new THREE.Group();
    let body = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.DoubleSide
    }));
    bodyGroup.add(body);
    return bodyGroup;
}

function buildLeg(WW, HH, DD) {
    var geometry = new THREE.BufferGeometry();
    var vertices = [];
    var indices = [];
    var uvs = [];

    ////////////
    const ww = 1;
    const hh = 3;
    const UU = 14 * ww;
    const VV = hh + 5 * ww;

    var a = {
        u: ww,
        v: hh + ww
    };
    var b = {
        u: 2 * ww,
        v: hh + ww
    };
    var c = {
        u: 3 * ww,
        v: hh + ww
    };
    var d = {
        u: 0,
        v: hh
    };
    var e = {
        u: ww,
        v: hh
    };
    var f = {
        u: 2 * ww,
        v: hh
    };
    var g = {
        u: 3 * ww,
        v: hh
    };
    var h = {
        u: 4 * ww,
        v: hh
    };
    var i = {
        u: 0,
        v: 0
    };
    var j = {
        u: ww,
        v: 0
    };
    var k = {
        u: 2 * ww,
        v: 0
    };
    var l = {
        u: 3 * ww,
        v: 0
    };
    var m = {
        u: 4 * ww,
        v: 0
    };

    // PZ
    vertices.push(-WW / 2, HH / 2, DD / 2, -WW / 2, -HH / 2, DD / 2, WW / 2, -HH / 2, DD / 2, WW / 2, HH / 2, DD / 2); // 0,3,2,1
    indices.push(0, 1, 2, 0, 2, 3);
    uvs.push(e.u / UU, e.v / VV, j.u / UU, j.v / VV, k.u / UU, k.v / VV, f.u / UU, f.v / VV); // e,j,k,f

    // PX
    vertices.push(WW / 2, HH / 2, DD / 2, WW / 2, -HH / 2, DD / 2, WW / 2, -HH / 2, -DD / 2, WW / 2, HH / 2, -DD / 2); // 1,2,6,5
    indices.push(4, 5, 6, 4, 6, 7); // [0,1,2, 0,2,3] + 4
    uvs.push(f.u / UU, f.v / VV, k.u / UU, k.v / VV, l.u / UU, l.v / VV, g.u / UU, g.v / VV); // f,k,l,g

    // NX
    vertices.push(-WW / 2, HH / 2, -DD / 2, -WW / 2, -HH / 2, -DD / 2, -WW / 2, -HH / 2, DD / 2, -WW / 2, HH / 2, DD / 2); // 4,7,3,0
    indices.push(8, 9, 10, 8, 10, 11); // [0,1,2, 0,2,3] + 8
    uvs.push(d.u / UU, d.v / VV, i.u / UU, i.v / VV, j.u / UU, j.v / VV, e.u / UU, e.v / VV); // d,i,j,e

    // NZ
    vertices.push(WW / 2, HH / 2, -DD / 2, WW / 2, -HH / 2, -DD / 2, -WW / 2, -HH / 2, -DD / 2, -WW / 2, HH / 2, -DD / 2); // 5,6,7,4
    indices.push(12, 13, 14, 12, 14, 15); // [0,1,2, 0,2,3] + 12
    uvs.push(g.u / UU, g.v / VV, l.u / UU, l.v / VV, m.u / UU, m.v / VV, h.u / UU, h.v / VV); // g,l,m,h

    vertices.push(-WW / 2, HH / 2, -DD / 2, -WW / 2, HH / 2, DD / 2, WW / 2, HH / 2, DD / 2, WW / 2, HH / 2, -DD / 2); // 4,0,1,5
    indices.push(16, 17, 18, 16, 18, 19); // [0,1,2, 0,2,3] + 16
    uvs.push(a.u / UU, a.v / VV, e.u / UU, e.v / VV, f.u / UU, f.v / VV, b.u / UU, b.v / VV); // a,e,f,b

    vertices.push(-WW / 2, -HH / 2, DD / 2, -WW / 2, -HH / 2, -DD / 2, WW / 2, -HH / 2, -DD / 2, WW / 2, -HH / 2, DD / 2); // 3,7,6,2
    indices.push(20, 21, 22, 20, 22, 23); // [0,1,2, 0,2,3] + 20
    uvs.push(b.u / UU, b.v / VV, f.u / UU, f.v / VV, g.u / UU, g.v / VV, c.u / UU, c.v / VV); // b,f,g,c

    geometry.setIndex(indices);
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    let LegGroup = new THREE.Group();
    let Leg = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.DoubleSide
    }));
    LegGroup.add(Leg);
    Leg.position.y = -HH / 2;
    return LegGroup;
}

function buildHand(WW, HH, DD) {
    var geometry = new THREE.BufferGeometry();
    var vertices = [];
    var indices = [];
    var uvs = [];

    ////////////
    const ww = 1;
    const hh = 3;
    const UU = 14 * ww;
    const VV = hh + 5 * ww;

    var a = {
        u: 11 * ww,
        v: hh + ww
    };
    var b = {
        u: 12 * ww,
        v: hh + ww
    };
    var c = {
        u: 13 * ww,
        v: hh + ww
    };
    var d = {
        u: 10 * ww,
        v: hh
    };
    var e = {
        u: 11 * ww,
        v: hh
    };
    var f = {
        u: 12 * ww,
        v: hh
    };
    var g = {
        u: 13 * ww,
        v: hh
    };
    var h = {
        u: 14 * ww,
        v: hh
    };
    var i = {
        u: 10,
        v: 0
    };
    var j = {
        u: 11 * ww,
        v: 0
    };
    var k = {
        u: 12 * ww,
        v: 0
    };
    var l = {
        u: 13 * ww,
        v: 0
    };
    var m = {
        u: 14 * ww,
        v: 0
    };

    // PZ
    vertices.push(-WW / 2, HH / 2, DD / 2, -WW / 2, -HH / 2, DD / 2, WW / 2, -HH / 2, DD / 2, WW / 2, HH / 2, DD / 2); // 0,3,2,1
    indices.push(0, 1, 2, 0, 2, 3);
    uvs.push(e.u / UU, e.v / VV, j.u / UU, j.v / VV, k.u / UU, k.v / VV, f.u / UU, f.v / VV); // e,j,k,f

    // PX
    vertices.push(WW / 2, HH / 2, DD / 2, WW / 2, -HH / 2, DD / 2, WW / 2, -HH / 2, -DD / 2, WW / 2, HH / 2, -DD / 2); // 1,2,6,5
    indices.push(4, 5, 6, 4, 6, 7); // [0,1,2, 0,2,3] + 4
    uvs.push(f.u / UU, f.v / VV, k.u / UU, k.v / VV, l.u / UU, l.v / VV, g.u / UU, g.v / VV); // f,k,l,g

    // NX
    vertices.push(-WW / 2, HH / 2, -DD / 2, -WW / 2, -HH / 2, -DD / 2, -WW / 2, -HH / 2, DD / 2, -WW / 2, HH / 2, DD / 2); // 4,7,3,0
    indices.push(8, 9, 10, 8, 10, 11); // [0,1,2, 0,2,3] + 8
    uvs.push(d.u / UU, d.v / VV, i.u / UU, i.v / VV, j.u / UU, j.v / VV, e.u / UU, e.v / VV); // d,i,j,e

    // NZ
    vertices.push(WW / 2, HH / 2, -DD / 2, WW / 2, -HH / 2, -DD / 2, -WW / 2, -HH / 2, -DD / 2, -WW / 2, HH / 2, -DD / 2); // 5,6,7,4
    indices.push(12, 13, 14, 12, 14, 15); // [0,1,2, 0,2,3] + 12
    uvs.push(g.u / UU, g.v / VV, l.u / UU, l.v / VV, m.u / UU, m.v / VV, h.u / UU, h.v / VV); // g,l,m,h

    vertices.push(-WW / 2, HH / 2, -DD / 2, -WW / 2, HH / 2, DD / 2, WW / 2, HH / 2, DD / 2, WW / 2, HH / 2, -DD / 2); // 4,0,1,5
    indices.push(16, 17, 18, 16, 18, 19); // [0,1,2, 0,2,3] + 16
    uvs.push(a.u / UU, a.v / VV, e.u / UU, e.v / VV, f.u / UU, f.v / VV, b.u / UU, b.v / VV); // a,e,f,b

    vertices.push(-WW / 2, -HH / 2, DD / 2, -WW / 2, -HH / 2, -DD / 2, WW / 2, -HH / 2, -DD / 2, WW / 2, -HH / 2, DD / 2); // 3,7,6,2
    indices.push(20, 21, 22, 20, 22, 23); // [0,1,2, 0,2,3] + 20
    uvs.push(b.u / UU, b.v / VV, f.u / UU, f.v / VV, g.u / UU, g.v / VV, c.u / UU, c.v / VV); // b,f,g,c

    geometry.setIndex(indices);
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    let handGroup = new THREE.Group();
    let hand = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.DoubleSide
    }));
    handGroup.add(hand);
    hand.position.set(0, -HH / 2, 0);
    return handGroup;
}