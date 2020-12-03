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
    let curr = root;    // curr is the pointer

    // The while loop ends when no item in the stack AND the curr goes to null, when either one is still available, the loop will continue
    while (stack.length !== 0 || curr !== null) {
        /*
         * Left: go as left as possible, the stack keeps the history of nodes that need
         * searching
         */
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        // after the curr is null now, base on inorder (left, node, right), traversalNums will have the most left item into it
        curr = stack.pop();
        // Below has to be curr.val as we just need the val of this node, not the whole node;
        traversalNums.push(curr.val);

        // after pop the left from stack, it will continue loop the right path and add them into stack, if right is null (while(curr) failed), then curr = stack.pop() agian to pop the node value
        curr = curr.right;
    }
    return traversalNums;
};

// Recursion method:
var inorderTraversalRe = function (root) {
    if (!root) return [];
    const res = [];
    res.push(...inorderTraversal(root.left));
    res.push(root.val);
    res.push(...inorderTraversal(root.right))
    return res;
};
