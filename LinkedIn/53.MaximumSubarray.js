let nums = [-1, 2, 4, 0, 2, -5];

let dp = new Array(nums.length);
console.log(dp);   // => [ <6 empty items> ]

// All the DP question,should write down the DP formula

// 1. For this question, since it is contiguous subarray, we only need track and compare current number and previous sum of numbers
// 2. when compare numbers, only have two situations, one is the previous (sum of) number is >=0,
// then current number + previous (sum of) number; another is the previous (sum of) number is < 0,
// then current number is the new result number,
// 3. when looping the nums, we track the max result number

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let dp = new Array(nums.length);
    // dp is the sum number based on the previous number's value
    dp[0] = nums[0];
    // since only add the number from position 1, so i = 1;
    let res = dp[0];        // keep tracking the res
    for (let i = 1; i < nums.length; i++) {
        dp[i] = nums[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0);
        res = Math.max(res, dp[i])
    }
    return res
};
