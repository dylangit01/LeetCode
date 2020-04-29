/**
 * @param {Array<number>} preorder
 * @param {Array<number>} inorder
 * @return {TreeNode}
 */
const buildTree = (preorder, inorder) => {
    const helper=(p, i)=> {
        if(!p.length || !i.length) return null;

        // find the root value, since preorder[0] has to be the root val
        let val = p[0];
        let rootPosLeftNums = i.indexOf(val); // this is the root position of inroder array, and also the number of left nodes in inorder array
        let root = new TreeNode(val);   // initiate the tree

        // below is the actual logic to re-build the tree
        // since p[0] is the root, so the left subtree has to be one index after, and slice method include the start index, not include the end index,
        // so p.slice(1, rootPosition + 1) is
        root.left = helper(p.slice(1, rootPosLeftNums + 1), i.slice(0, rootPosLeftNums));
        root.right = helper(p.slice(rootPosLeftNums + 1), i.slice(rootPosLeftNums + 1))

        return root
    };
    return helper(preorder, inorder)
};


// Basic idea of this question:
// The basic idea is: from the preorder array, we know that the value of the root node is the first element, since the inorder array doesn't contain duplicate values, from the inorder array, we can find out the index of the root value, with this index, we can calculate how many nodes are there in the left and right subtrees, based on these information we can recursively rebuild the whole tree.
//
// For example, we have this tree below:
//
//             1
//            / \
//           2   3
//          / \   \
//         4   5   6
// the preorder and inorder arrays are:
//
//     preorder: 1 2 4 5 3 6
//     inorder: 4 2 5 1 3 6
//
// let's group the left nodes with ( ) and right nodes with [ ]:
//
// preorder: 1 (2 4 5) [3 6]
// inorder: (4 2 5) 1 [3 6]
//
// we can then build the left subtree using the following preorder and inorder arrays:
//
//     preorder: 2 4 5
//     inorder: 4 2 5
//
// and for the right subtree:
//
//     preorder: 3 6
//     inorder: 3 6

