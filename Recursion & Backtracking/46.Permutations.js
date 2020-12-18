/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// O(n!)
var permute = function(nums) {
    let permutations = [];

    let findPermutations = (visited = new Set(), currPerm = []) => {
        // once loop all the items from nums and the length === nums.length, push them into permutations array
        if(currPerm.length === nums.length) {
            permutations.push(currPerm);
            return;
        }
        for(let i = 0; i < nums.length; i ++){
            // the reason to have new Set() is to use .has method to verify if the key (i) exist or not,
            // if the object doesn't have the value of this key, then based on the key (i), adding the value to currPerm,
            // then recursively spread adding key and nums[i] to currPerm
            if(!visited.has(i)){
                findPermutations(new Set([...visited, i]), [...currPerm, nums[i]])
            }
        }
    };
    findPermutations();
    return permutations
};

