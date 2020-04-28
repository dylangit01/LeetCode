/**
 * @param {TreeNode} node
 * @param {number} targetSum
 * @return {boolean}
 */

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

const hasPathSum = (node, targetSum) => {
    if(node === null) return false;

    const isLeaf = node.left === null && node.right === null;
    // The recursive base:
    if(isLeaf && targetSum - node.val === 0){
        return true;
    }
    // Recursive way: every recursive, the targetSum = targetSum - node.val
    return hasPathSum(node.left, targetSum - node.val) || hasPathSum(node.right, targetSum - node.val)
};
