// var twoSum = function(nums, target) {
//     let map = {};
//
//     for(let i =0; i < nums.length; i ++){
//         let diffNum = target - nums[i];
//         // if map has this diffNum's value, then return this position and current position of nums
//         if(map[diffNum] !== undefined){
//             return [map[diffNum], i]
//         }
//         // if map doesn't have this key, then add this position to this map
//         map[nums[i]] = i
//     }
// };

// so in map, using map[] to represent the key and get the value of this object
// in array, using array[] to represent the value of this position

// practice:
let twoSum = (nums, target) => {
    let obj = {};
    for(let i = 0; i < nums.length; i ++){
        let diffNum = target - nums[i];
        if(obj[diffNum] !== undefined){
            return [obj[diffNum], i]
        }
        obj[nums[i]] = i
    }
};
