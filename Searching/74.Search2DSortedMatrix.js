/**
 * @param {Array<Array<number>>} matrix
 * @param {number} target
 * @return {boolean}
 */
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
