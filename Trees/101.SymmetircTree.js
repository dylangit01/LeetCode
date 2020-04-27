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
var isSymmetric = function(root) {
    if(root === null) return true;

    const checkSymmetry = (leftRoot, rightRoot) => {
        if(leftRoot === null && rightRoot === null) return true;

        if(leftRoot !== null && rightRoot !== null){
            return leftRoot.val === rightRoot.val &&
                checkSymmetry(leftRoot.left, rightRoot.right) &&
                checkSymmetry(leftRoot.right, rightRoot.left)
        }

        return false
    }

    return checkSymmetry(root.left, root.right)
};
