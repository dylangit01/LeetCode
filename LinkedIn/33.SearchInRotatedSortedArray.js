/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // find sort
    // binary search realMid
    let n = nums.length;
    if(n < 1) return -1;
    else if(n < 2) return nums[0] === target ? 0 : -1;

    let s = 0, e = n-1;
    while (s<e) {
        let mid = Math.floor((s+e)/2);
        if(nums[mid] > nums[e]) s = mid + 1;
        else e = mid;
    }
    let rot = s;
    s = 0;
    e = n-1;
    while (s<=e){
        let mid = Math.floor((s+e)/2);
        let realMid = (mid + rot) % n;
        if(nums[realMid] === target) return realMid;
        else if(nums[realMid] > target) e = mid -1;
        else s = mid + 1
    }
    return -1
};
