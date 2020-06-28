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

    let right = totalCols * totalRows - 1;

    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);        // same as Math.floor((left + right)/2), but more safe way
        // using binary search to find the mid item, and narrow down the left and right boundary

        // for wrap around matrix, we use "/" and "%" to get where is the "i" located base on row and col
        // row: i/totalColumns; col: i % totalColumns
        let midItemValue = matrix[Math.floor(mid/totalCols)][mid % totalCols];

        if (midItemValue === target) return true;
        else if (midItemValue < target) {
            left = mid++;
        } else {
            right = mid--
        }
    }
       return false
    };

//  original:
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


    // practice:
const searchMatrix = (matrix, target) => {
    if (!matrix.length) return false;
    let totalRows = matrix.length;
    let totalCols = matrix[0].length;
    let left = 0;
    let right = totalRows * totalCols - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        let row = Math.floor(mid/totalCols);
        let col = mid % totalCols;

        let midValue = matrix[row][col];

        if (midValue === target) return true;
        else if (midValue > target) {
            right = mid-1
        } else {
            left = mid+1
        }
    }
    return false
};





// 240:
/*
The logic of this problem cannot using 74 question's method, but think as below:
1. Every row' value is increasing from top to bottom, and every col'value is increasing from left to right, vice versa;
2. So we need to find a start point that can compare with target value, it also has to have the ability to increase and decrease the value,
    so the only possible points are right top corner and left bottom corner; e.g., left top can only increase the value, and right bottom can only decrease the value
3. So we start at top right corner to while loop:
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(!matrix.length) return false;

    let row = 0;
    let col = matrix[0].length - 1;

    // since row starts from index 0, so it has to be <= matrix.length - 1 or < matrix.length;
    while(row < matrix.length && col >=0){
        let testValue = matrix[row][col];
        if(testValue === target) return true;
        else if(testValue > target) col--;
        else row++
    }
    return false
};

// the time complexity is O(m+n)
