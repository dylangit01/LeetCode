/**
 * @param {Array<number>} nums
 * @return {number}
 */


// Modified Binary Search
// Since the array is sorted we can do a binary search, but we have to change our branching condition now that the array is rotated.
const findMin = (nums) => {
   let left = 0;
   let right = nums.length - 1;

   while (left < right) {
       const mid = left + Math.floor((right-left)/2);

       if(nums[mid] > nums[right]){
           left = mid + 1;
       } else right = mid;
   }
   return nums.length > 0 ? nums[left] : -1;
};

// this question is very useful for LinkedIn question 33, check it out!!!!!!!
