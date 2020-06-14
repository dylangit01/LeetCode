// Time: O(n)
// Space: O(1)


/**
 * @param {Array<number>} nums
 * @return {Array<number>}
 */
var nextPermutation = function(nums) {
    let i = nums.length - 2;
    // backwards to find the number before the decreasing sequence
    while(i >=0 && nums[i+1] <= nums[i]){
        i--
    }
    // find the smallest number that greater than nums[i]
    if(i >=0){
        let j = nums.length - 1;
        while(j >=0 && nums[j] <= nums[i]){
            j --
        }
        swap(nums, i, j)
    }
    // reverse the numbers after index i, so i+1
    reverse(nums, i+1);
    return nums

};

const reverse=(nums, start)=> {
    let left = start;
    let right = nums.length - 1;

    while(left < right){
        swap(nums, left, right)
        left ++;
        right --;
    }
};

const swap=(nums, i, j)=> {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp
};


