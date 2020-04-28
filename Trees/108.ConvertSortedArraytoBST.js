/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    return buildBST(nums, 0, nums.length)
};

const buildBST = (nums, left, right)=>{
    if(left >= right) return null;

    const middleIndex = left + Math.floor((left + right)/2);
    const newNode = new TreeNode(nums[middleIndex]);

    newNode.left = buildBST(nums, left, middleIndex);
    newNode.right = buildBST(nums, middleIndex + 1, right);

    return newNode;
};
