/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // calculate lefts to res array, left to right, left[0] = 1;
    // calculate rights to res array, right to left, right[0] = 1;

    let n = nums.length;
    let res = new Array(n);
    res[0] = 1;
    // first loop for left res, starts from i = 1 as no need to calculate the left res when i = 0;
    for(let i = 1; i < n; i ++){
        res[i] = res[i-1] * nums[i-1]
    }
    // second loop for right res array, and it stars from the right to left
    let right = 1;
    for(let j = n -1; j >= 0; j--){
        // the most right res = res[j] * right, as there is no item after it
        res[j] *= right;
        // and right number = right number * num[j]
        right *= nums[j]
    }
    return res
};

// The tricky parts are:
//  1. understand using left and right parts to calculate this product except self;
//  2. understand how to save the left and right parts space, not calculate left and right parts separately,
//      and then calculate the res afterwards, instead, using res to get the left parts first,
//      and get final res by times right parts to save the overall space complexity
