// New agnet

function newAnt() {
    let randColor = Math.random() * 0xffffff;
    let circle = new THREE.Mesh(new THREE.CircleGeometry(2, 20), new THREE.MeshBasicMaterial({
        color: randColor
    }));

    let pos = new THREE.Vector3(-20, 10 + Math.random() * 10, 0);
    let agent = new Agent(pos, circle);
    agent.vel.set(4, -8 + Math.random() * 10, 0);
    agents.push(agent);

    if (agents.length < 10)
        setTimeout(newAnt, 2000);
}