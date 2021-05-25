function findNbhd(agents) {
    let i, j, dst;
    let nAgents = agents.length;

    agents.forEach(function(agent) {
        agent.nbhd = []
    });

    for (i = 0; i < nAgents - 1; i++) {
        for (j = i + 1; j < nAgents; j++) {
            dst = agents[i].distanceTo(agents[j])
            if (dst < 20) {
                agents[i].addNbr(agents[j])
                agents[j].addNbr(agents[i])
            }
        }
    }
    /*for (i = 0; i < nAgents - 1; i++) {
        for (j = i + 1; j < nAgents; j++) {
            dst = agents[i].distanceTo(agents[j])
            if (dst < 20) { 
                agents[i].addNbr(agents[j])
                agents[j].addNbr(agents[i])
            }
        }
    }*/
}