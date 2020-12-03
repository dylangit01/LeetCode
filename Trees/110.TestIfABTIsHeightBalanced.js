/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(!root) return true;
// calculate the depth of each node
    const helper = (node, depth = 0) => {
        if(!node) return depth;
        return Math.max(helper(node.left, depth + 1), helper(node.right, depth + 1))
    };
// make sure different node have BOTH sides (right and left) and height between two of them not more than 1.
    return isBalanced(root.left) && isBalanced(root.right) && Math.abs(helper(root.left) - helper(root.right)) <= 1
};
