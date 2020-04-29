/**
 * @param {TreeNode} root
 * @return {number}
 */
// var diameterOfBinaryTree = function(root) {
//     let diameter = 0;
//
//     dfs(root);
//
//     return diameter;
//
//     function dfs(node, level) {
//         if (!node) return 0;
//
//         const left = dfs(node.left);
//         const right = dfs(node.right);
//
//         // update diameter at every node
//         diameter = Math.max(diameter, left + right);
//
//         // update the largest number of edge so far
//         return 1 + Math.max(left, right);
//     }
// };

// Practice:
maxDiameterOfBT = (root) => {
    let diameter = 0;

    const findMaxDiameter = (node) => {
        if(!node) return 0;

        let left = findMaxDiameter(node.left);
        let right = findMaxDiameter(node.right)

        diameter = Math.max(diameter, left + right);

        return Math.max(left, right) + 1;
    };

    findMaxDiameter(root);
    return diameter;
};
