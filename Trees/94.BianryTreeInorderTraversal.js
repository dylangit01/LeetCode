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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    let stack = [];
    let traversalNums = [];
    let curr = root;

    // The while loop ends when no item in the stack AND the curr goes to null, either one available, the loop will continue
    while (stack.length !== 0 || curr !== null) {
    /*
     * Left: go as left as possible, the stack keeps the history of nodes that need
     * searching
     */
        while (curr !== null) {
            stack.push(curr);
            curr = curr.left;
        }
        // after the curr is null now, investigate the node on the top of the stack
        curr = stack.pop();
        // Below has to be curr.val as we just need the val of this node, not the whole node;
        traversalNums.push(curr.val);

        curr = curr.right;
    }
    return traversalNums;
};
