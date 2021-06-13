class BSPNode {
    constructor(p1, p2) {
        this.coeff = [-(p2.y - p1.y), p2.x - p1.x, p1.x * p2.y - p2.x * p1.y];
        // for distance computation, need to be normalized
        let factor = Math.sqrt(this.coeff[0] * this.coeff[0] + this.coeff[1] * this.coeff[1]);
        this.coeff[0] /= factor;
        this.coeff[1] /= factor;
        this.coeff[2] /= factor;

        this.p1 = p1;
        this.p2 = p2;
        this.leftChild = null;
        this.rightChild = null;
    }
    break (p) {
        let newLine = new BSPNode(p, this.p2); // the new line
        this.p2 = p; // the original line
        return newLine;
    }

    setLeftChild(node) {
        this.leftChild = node;
    }
    setRightChild(node) {
        this.rightChild = node;
    }
}