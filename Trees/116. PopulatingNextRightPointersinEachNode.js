// You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

class Node {
    constructor(val, left, right, next) {
        this.val = val === undefined ? null : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
        this.next = next === undefined ? null : next;
    }
}

const connect = function(root) {
    if(!root) return null;

    if(root.left) root.left.next = root.right;

    if(root.right && root.next) root.right.next = root.next.left

    root.left = connect(root.left)
    root.right = connect(root.right)

    return root
};


// No guarantee a PBT:
var connectNPBT = function(root) {
    if(!root) return null;

    const findNextNode = (node) => {
        if(!node) return null;

        if(node.left) return node.left;
        if(node.right) return node.right;

        return findNextNode(node.next)
    };


    if(root.left){
        if(root.right){
            root.left.next = root.right;
        } else{
            root.left.next = findNextNode(root.next)
        }
    }

    if(root.right){
        root.right.next = findNextNode(root.next)
    }

    root.left = connectNPBT(root.left);
    root.right = connectNPBT(root.right)

    return root

};
