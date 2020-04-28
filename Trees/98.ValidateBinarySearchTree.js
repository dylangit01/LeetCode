/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

isValidBST = (root) => {
    return isNodeValid(root, Number.MIN_VALUE, Number.MAX_SAFE_INTEGER)
};

const isNodeValid = (node, min, max) => {
    if(node === null) return true;
    else if(node.val <= min || node.val >= max) return false;

    return isNodeValid(node.left, min, node.val) && isNodeValid(node.right, node.val, max)
};

