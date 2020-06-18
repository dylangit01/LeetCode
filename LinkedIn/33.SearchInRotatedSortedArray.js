/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    // find sort
    // binary search realMid
    let n = nums.length;
    if (n < 1) return -1;
    else if (n < 2) return nums[0] === target ? 0 : -1;

    let left = 0, right = n - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[right]) left = mid + 1;
        else right = mid;
    }
    // rotateIndex ==> minValueIndex === left (got from above while loop)
    let rotateIndex = left;
    left = 0;
    right = n - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // this calculation can get the real mid Index of sorted array(before rotated), actually, (mid + rotateIndex) must === n, so thee realMidNumIndex must === 0, which is the first num value
        // and binary search is searching based on the real mid index value
        let realMidNumIndex = (mid + rotateIndex) % n;

        if (nums[realMidNumIndex] === target) return realMidNumIndex;
        else if (nums[realMidNumIndex] > target) right = mid - 1;
        else left = mid + 1
    }
    return -1
};
