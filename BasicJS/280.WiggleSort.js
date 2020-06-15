// Given an unsorted array nums, reorder it in-place such that nums[0] <= nums[1] >= nums[2] <= nums[3]....
// meaning let num[0] <= num[1], num[1] >= num[2], num[2] <= num[3]...
// Example:
//
// Input: nums = [3,5,2,1,6,4]
// Output: One possible answer is [3,5,1,6,2,4]

let numsArr = [3, 4, 2, 1, 6, 5]

wiggleSort = (nums) => {
    // sort: it is a js internal function
    nums.sort((a, b) => a-b);
    // since nums[0] is the smallest num, so we start from index = 1, also, we keep that last(largest) position number untouched
    // besides, we only swap every two numbers, so the increase is: i +=2
    for(let i = 1; i < nums.length-1; i +=2){
        let temp = nums[i];
        nums[i] = nums[i+1];
        nums[i+1] = temp
    }
    console.log(nums)
};

wiggleSort(numsArr)
