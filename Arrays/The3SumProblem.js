/**
 * @param {Array<number>} arr
 * @return {Array<Array<number>>}
 */
// const threeSum = (arr) => {
//     // Sort this arr, so that we can using two pointer approach
//     arr.sort((a, b) => a - b);
//
//     // Using hash table to prevent repeated passes, we also have to initiate a new Set(),so that findTwoSum function can use add function.
//     let allThreeSums = new Set();
//     // We are going to loop this arr, and we will end this loop when i < arr.length -2, because we need total three number, so if we need sum 4 numbers, we need to change to length -3;
//     const maxLoopLength = arr.length -2;
//
//     for(let i = 0; i < maxLoopLength; i ++){
//         findTwoSum(i, arr, allThreeSums)
//     }
//
//     return Array.from(allThreeSums)
//
//
// };
// const findTwoSum = (rootIndex, array, allThreeSumObj ={}) => {
//     let left = rootIndex + 1; // here we let arr[rootIndex] as the 1st number of allThreeSum;
//     let right = array.length - 1;
//
//     while (left < right){
//         const threeNumberSum = array[rootIndex] + array[left] + array[right];
//
//         if(threeNumberSum === 0){
// here we use left++ and right-- because when threeNumberSum === 0, next time, we still need to add other numbers' sum when they are === 0, that's why using left++ and right--
//             allThreeSumObj.add([array[rootIndex], array[left++], array[right--]])
//         } else if(threeNumberSum < 0) {
//             left ++
//         } else right--
//     }
// };


// practice:
/**
 * @param {Array<number>} A
 * @return {Array<Array<number>>}
 */
const threeSum = (A) => {
    A.sort((a,b) => a - b);

    let allThreeSums = new Set();

    const maxLoopLength = A.length - 2;

    for(let i = 0; i < maxLoopLength; i ++ ){
        findTwoSum(i, A, allThreeSums)
    }

    return Array.from(allThreeSums)

}

const findTwoSum = (rootIndex, arr, allThreeSums) => {
    let left = rootIndex + 1;
    let right = arr.length - 1;

    while(left < right) {
        const threeNumSum = arr[rootIndex] + arr[left] + arr[right];

        if(threeNumSum === 0){
            allThreeSums.add([arr[rootIndex], arr[left++], arr[right--]])
        } else if (threeNumSum < 0) {
            left ++
        } else right--

    }

};

