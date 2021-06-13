function buildTree() {
    // outer wall(CCW)
    A = new Point(0, 5);
    B = new Point(2, 1);
    C = new Point(7, 3);
    D = new Point(5, 6);

    make3JSLoop(A, B, C, D, A);

    // inner wall(CW)
    E = new Point(2, 3);
    F = new Point(2, 4);
    G = new Point(3, 3);
    make3JSLoop(E, F, G, E);

    let L1 = new BSPNode(A, B);
    let L1b = L1.break(new Point(1, 3));
    let L1a = L1;
    let L2 = new BSPNode(B, C);
    let L3 = new BSPNode(C, D);
    let L4 = new BSPNode(D, A);

    let L5 = new BSPNode(E, F);
    let L6 = new BSPNode(F, G);
    let L7 = new BSPNode(G, E);

    // build BSP tree(inorder traversal)
    L7.setLeftChild(L1b);
    L1b.setLeftChild(L2);

    L7.setRightChild(L4);
    L4.setLeftChild(L6);
    L6.setLeftChild(L3);

    L6.setRightChild(L5);
    L5.setLeftChild(L1a);

    return L7; // tree root 
}