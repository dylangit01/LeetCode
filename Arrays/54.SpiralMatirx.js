/**
 * @param {Array<Array<number>>} matrix
 * @return {Array<number>}
 */
const spiralOrder = (matrix) => {
    const spiralList = [];

    // adding condition, if matrix.length ===0, return sprialList
    if (matrix.length === 0) return spiralList;

    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        // for top to right:
        for (let col = left; col <= right; col++) {
            spiralList.push(matrix[top][col]);
        }
        // after the for loop, push top one row down as next calculation should not reread the last item of the first row
        top++;

        for (let row = top; row <= bottom; row++) {
            // notice here to push when row is increasing, adding the last item of each row into spiralList, not matrix[row][right]
            spiralList.push(matrix[row][right])
        }
        right--;

        if (top <= bottom) {
            for (let col = right; col >= left; col--) {
                spiralList.push(matrix[bottom][col])
            }
        }
        bottom--;

        if (left <= right) {
            for (let row = bottom; row >= top; row--) {
                // below also should adding each row but the first item, which is matrix[row][left]
                spiralList.push(matrix[row][left])
            }
        }
        left++
    }
    return spiralList;
};


