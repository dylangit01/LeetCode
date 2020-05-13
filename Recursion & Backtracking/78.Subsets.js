/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsBTBSWE = function(nums) {
    const finalSubsets = [];
    subsetsHelper(0, [], nums, finalSubsets);
    return finalSubsets;
};

const subsetsHelper = (currentIndex, tempArray, nums, finalSubsets)=> {
    if(currentIndex === nums.length) return finalSubsets.push(Array.from(tempArray));

    tempArray.push(nums[currentIndex]);
    subsetsHelper(currentIndex + 1, tempArray, nums, finalSubsets);
    // remove what have been added
    tempArray.pop();
    subsetsHelper(currentIndex + 1, tempArray, nums, finalSubsets)
};



// better understanding method:
var subsets = function(nums) {
    return subsetsHelper(nums, [], 0, [] )
};

const subsetsCal = (nums, tempset, index, finalsets) => {
    if(index > nums.length) return;

    // push every tempset to finalsets
    finalsets.push(tempset);

    for(let i= index; i < nums.length; i++){
        //we're adding nums[i] to our set and passing 'i' in so there is no duplicates
        subsetsCal(nums, [...tempset, nums[i]], i + 1, finalsets)
    }

    return finalsets
};

// easies method:
var subsets = function(nums) {
    let res = [];

    function backtrack(index, curr) {
        res.push(curr);
        for (let i = index; i < nums.length; i++) {
            backtrack(i + 1, [...curr, nums[i]])
        }
    }

    backtrack(0, []);
    return res
};
