/**
 * @param {Array<Array<number>>} matrix
 * @param {number} target
 * @return {boolean}
 */
// 74:
const searchMatrix = (matrix, target) => {
    if (!matrix.length) return false;

    let totalRows = matrix.length;
    let totalCols = matrix[0].length;

    let left = 0;

    // we change this matrix to an 1D array, so the last item index of this matrix will be row * col, not row * col -1, as it will cause incorrect right value when matrix.length = 1 scenario
    let right = totalCols * totalRows - 1;

    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        // using binary search to find the mid item, and narrow down the left and right boundary
        let midItemValue = matrix[Math.floor(mid/totalCols)][mid % totalCols]

        if (midItemValue === target) return true;
        else if (midItemValue < target) {
            left = mid++;
        } else {
            right = mid--
        }
    }
       return false
    };








    // const searchMatrix = (matrix, target) => {
    // if (!matrix.length) return false;
    // let m = matrix.length, n = matrix[0].length, left = 0, right = m*n-1
    // while (left <= right) {
    //     let mid = Math.floor((left + right) / 2)
    //     let row = Math.floor(mid/n), col = Math.floor(mid%n)
    //     if (target === matrix[row][col]) return true
    //     if (target < matrix[row][col]) {
    //         right = mid - 1
    //     } else {
    //         left = mid + 1
    //     }
    // }
    // return false
    // }





// 240:
const search = (matrix, target) => { // We ask that you implement variant 2
    if(!matrix.length || !matrix[0].length) return false;

    let col = matrix[0].length - 1;
    let row = 0;

    while (row <= matrix.length - 1 && col >= 0){
        if(matrix[row][col] === target){
            return true;
        } else if(matrix[row][col] < target) row++;
        else if(matrix[row][col] > target) col--
    }
    return false;
};

// the time complexity is O(m+n)
