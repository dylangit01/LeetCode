deleteNode = (root, key) => {
    if (!root) return null;

    // if key < root.val, it will recursively search root left subtree until find matched val to delete or return null
    if (key < root.val) {
        root.left = deleteNode(root.left, key)
    }
    if (key > root.val) {
        root.right = deleteNode(root.right, key)
    }
    // if any below condition is true, return accordingly;
    if (root.val === key) {
        if (!root.left && !root.right) return null;

        if (!root.left) return root.right;
        if (!root.right) return root.left;

        // if both child nodes exist of this root, we want the next node in the inorder traversal after this root.right' node to take this root's place;
        const nextInorderNode = inorderTraversal(root.right);
        root.val = nextInorderNode.val
        // Then we need to delete the inorder node since it already replaced the root.val, meaning the nextInorderNode.val === root.val === key,
        // so we need to recursively update the root.right nodes to make sure it's not the right subtree anymore.
        root.right = deleteNode(root.right, nextInorderNode.val)
    }
    return root;
};

const inorderTraversal = (node) => {
    if (!node) return null;

    let curr = node;
    while (curr.left) {
        // NODE: curr = curr.left, not curr = curr.next
        curr = curr.left;
    }
    return curr;
};



// Or
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if (!root)
        return root;

    if (root.val === key){
        if (!root.left && !root.right){
            return null;
        }
        if (!root.right){
            return root.left;
        }
        const succ = inOrderSuccessor(root.right);
        root.val = succ.val;
        root.right = deleteNode(root.right, succ.val);
        return root;
    }

    if (key < root.val)
        root.left = deleteNode(root.left, key);
    if (key > root.val)
        root.right = deleteNode(root.right, key);

    return root;
};

const inOrderSuccessor = (node) => {
    while(node.left) {
        node = node.left;
    }
    return node;
}
