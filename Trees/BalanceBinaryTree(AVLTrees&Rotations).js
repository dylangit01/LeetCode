/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

// this method is using stack and inorder of a tree to find the inorder items, and then using cursive way to rebuild this balanced tree

let balanceBST = root => {
    let stack = [];
    let inorder = [];

    const convert = (i, j) => {
        if(i > j) return null;

        const midIndex = Math.floor((i + j)/2);
        const node = new TreeNode(inorder[midIndex]);
        node.left = convert(i, midIndex -1);
        node.right = convert(midIndex + 1, j);
        return node;
    };

    let cur = root;
    while (stack.length || cur){
        while (cur){
            stack.push(cur);
            cur = cur.left;
        }
        // when cur is null:
        cur = stack.pop();
        inorder.push(cur.val);
        cur = cur.right;
    }
    return root? convert(0, inorder.length - 1) : null;
};
