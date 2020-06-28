/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */


// BTB method doesn't work:
var lowestCommonAncestor = function(root, p, q) {
    if(p < root.val && q < root.val){
        lowestCommonAncestor(root.left, p, q)
    }
    if(p> root.val && q > root.val){
        lowestCommonAncestor(root.right, p, q)
    }

    return root
};

// Workable method:

var lowestCommonAncestor = function(root, p, q) {
    if (!root || q === root || p === root) return root;

    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);

    if(!left) return right;
    if(!right) return left;

    return root
};
