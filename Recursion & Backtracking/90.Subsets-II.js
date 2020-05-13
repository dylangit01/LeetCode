// Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).
//
// Note: The solution set must not contain duplicate subsets.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    if (!nums || !nums.length) {
        return [];
    }

    const res = [];

    // in order to pick out the duplicate number, we need to sort the nums
    nums.sort((a, b) => a - b);

    const helper = (index, curr) => {
        res.push(curr);

        for (let i = index; i < nums.length; i++) {
            if (i !== index && nums[i] === nums[i-1]) {

                // The continue statement terminates execution of the statements
                // in the current iteration of the current or labeled loop,
                // and continues execution of the loop with the next iteration.
                continue;
            }
            helper(i + 1, [...curr, nums[i]]);
        }
    };

    helper(0, []);

    return res;
};
