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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];

    const levelsList = [];

    const queue = [root];
    // queue.push(root);

    while (queue.length > 0) {
        const currentLayer = [];

        const layerSize = queue.length;         // fixed loop times
        for (let i = 0; i < layerSize; i++) {   // here cannot use i < queue.length; has to use variable to represent queue.length to update the data
            const currentNode = queue.shift();

            // Cannot add if condition: "if(currentNode.val){}"
            currentLayer.push(currentNode.val);

            if (currentNode.left) {
                queue.push(currentNode.left);
            }

            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }

        levelsList.push(currentLayer);
    }

    return levelsList;
};


// var levelOrder = function(root) {
//     if (!root) return [];
//     let queue = [root]
//     let result = [];
//     while (queue.length > 0) {
//         let current = [];
//         let len = queue.length;     //fixed loop times
//         for(let i = 0; i < len; i++) {
//             let node = queue.shift();
//             current.push(node.val);
//             if (node.left) queue.push(node.left);
//             if (node.right) queue.push(node.right);
//         }
//         result.push(current);
//     }
//     return result;
// };
