class Agent {
    constructor(pos, mesh) {
        this.pos = pos.clone();
        this.vel = new THREE.Vector3();
        this.force = new THREE.Vector3();
        this.target = null;
        this.size = 3; // half width
        this.mesh = mesh;
        scene.add(mesh);

        this.nbhd = [];
        this.MAXSPEED = 100;
        this.ARRIVAL_R = 30;

        // for orientable agent
        this.angle = 0;
    }

    update(dt) {
        this.accumulateForce();

        // collision
        // for all obstacles in the scene
        let obs = scene.obstacles;

        // pick the most threatening one
        let theOne = null;
        let dist = 1e10;
        let vhat = this.vel.clone().normalize();
        const REACH = 50;
        const K = 10;
        let perp;
        for (let i = 0; i < obs.length; i++) {
            let point = obs[i].center.clone().sub(this.pos) // c-p
            let proj = point.dot(vhat);
            if (proj > 0 && proj < REACH) {
                perp = new THREE.Vector3();
                perp.subVectors(point, vhat.clone().setLength(proj));
                let overlap = obs[i].size + this.size - perp.length()
                if (overlap > 0 && proj < dist) {
                    theOne = obs[i]
                    dist = proj
                    perp.setLength(K * overlap);
                    perp.negate();
                }
            }
        }
        if (theOne)
            this.force.add(perp);

        this.vel.add(this.force.clone().multiplyScalar(dt));


        // ARRIVAL: velocity modulation
        if (this.target !== null) {
            let diff = this.target.clone().sub(this.pos)
            let dst = diff.length();
            if (dst < this.ARRIVAL_R) {
                this.vel.setLength(dst);
            }
        }

        this.pos.add(this.vel.clone().multiplyScalar(dt))
        this.mesh.position.copy(this.pos)

        // for orientable agent
        // non PD version
        if (this.vel.length() > 1) {
            this.angle = Math.atan2(-this.vel.z, this.vel.x)
            this.mesh.rotation.y = this.angle
        }
    }

    setTarget(x, y, z) {
        if (this.target)
            this.target.set(x, y, z)
        else
            this.target = new THREE.Vector3(x, y, z);
    }
    targetInducedForce(targetPos) { // seek
        return targetPos.clone().sub(this.pos).normalize().multiplyScalar(this.MAXSPEED).sub(this.vel)
    }

    accumulateForce() {
            if (this.target !== null)
                this.force.copy(this.targetInducedForce(this.target));
            /////////////////Group Steer////////////////////
            // separation  push
            let push = new THREE.Vector3();
            for (let i = 0; i < this.nbhd.length; i++) {
                let point = this.pos.clone().sub(this.nbhd[i].pos);
                push.add(point.setLength(separation / point.length()));
            }
            this.force.add(push);

            // coherence  pull
            if (this.nbhd.length > 0) {

                let coherence = new THREE.Vector3();
                for (let i = 0; i < this.nbhd.length; i++) {
                    coherence.add(this.nbhd[i].pos);
                }
                coherence.divideScalar(this.nbhd.length);

                let to = this.targetInducedForce(coherence);

                this.force.add(to);
            }
        }
        //////////////////Group Steer/////////////////////
    distanceTo(otherAgent) {
        return this.pos.distanceTo(otherAgent.pos)
    }
    addNbr(otherAgent) {
        this.nbhd.push(otherAgent)
    }

}