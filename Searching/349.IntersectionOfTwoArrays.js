/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// Method one: Brute Force (Quadratic Solution: the worst method),
    // Think about using Set for "UNIQUE" collection items, we can check every single pair to see if they are same
    // If using array, it will have duplicated item
var intersection = function(nums1, nums2) {
    const intersection = new Set();

    for(let i = 0; i < nums1.length; i ++){
        if(i === 0 || nums1[i] !== nums1[i-1]){         // if condition is to avoid the same value of the num1 array to save run time, but this condition is optional as Set will only save unique items
            for(let j = 0; j < nums2.length; j ++){
                if(nums1[i] === nums2[j]){
                    intersection.add(nums1[i])
                }
            }
        }
    }
    return Array.from(intersection)
};


// Method two: Linear time, but this method failed to pass the LeetCode test:
const intersectionII = (nums1, nums2) => {
    nums1.sort();
    nums2.sort();

    const intersection = new Set();

    let idx1 = 0;
    let idx2 = 0;
    while (idx1 < nums1.length && idx2 < nums2.length){
        if(nums1[idx1] === nums2[idx2]){
            intersection.add(nums1[idx1]);
            idx1++;
            idx2++
        }
        // need to consider the situation that the nums are not equal and which number is less, we keep this array to continue loop as we need to find the sorted merged array
        else if(nums1[idx1] < nums2[idx2]){   // meaning we keep the num1 to next value to compare
            idx1++
        } else {
            idx2++
        }
    }
    return Array.from(intersection)
};


// Method three: same as method two, not passed in Leetcode:
const intersectionIII = (nums1, nums2) => {
    nums2.sort();

    const intersection = new Set();
    for (let i = 0; i < nums1.length; i++) {
        if (i === 0 || nums1[i] !== nums1[i - 1]) {
            const found = binarySearch(nums2, nums1[i]);

            if (found) {
                intersection.add(nums1[i]);
            }
        }
    }

    return Array.from(intersection)
}

const binarySearch = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);

        if (nums[mid] === target) {
            return true;
        } else if (target < nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return false;
}
