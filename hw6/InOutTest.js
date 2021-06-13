function inOut(x, y, node, r = 0) { // 半徑(r) default 為 0

    if (node.coeff[0] * x + node.coeff[1] * y + node.coeff[2] >= r) {
        if (node.leftChild === null)
            return 0; // free space
        else
            return inOut(x, y, node.leftChild, r);
    } else { // <= 0
        if (node.rightChild === null)
            return 1; // solid space
        else
            return inOut(x, y, node.rightChild, r);
    }

}