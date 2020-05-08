/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // find sort
    // binary search realMid
    if(nums.length === 0) return -1

    let n = nums.length;
    let left = 0;
    let right = n-1;

    // here has to be left < right
    while(left < right){
        let mid = Math.floor((left+right)/2);
        if(nums[mid] > nums[right]){
            left = mid + 1
        } else right = mid
    }

    let minValIndex = left;
    left = 0;
    right = n - 1;
    while(left <= right){
        let mid = Math.floor((left+right)/2);
        let realMid = (mid + minValIndex) % n;
        if(nums[realMid] === target) return realMid;
        else if(nums[realMid] > target) right = mid-1;
        else left = mid + 1
    }
    return -1
};