/**
 * @param {Array<Array<number>>} matrix
 * @return {Array<Array<number>>}
 */
const rotate = (matrix) => {
    const size = matrix.length - 1;

    // the layer is how many circle that we will finish the rotation, and the calculate way is Math.floor(matrix.length/2), 固定用法
    for(let layer = 0; layer < Math.floor(matrix.length/2); layer ++){
        for(let i = layer; i < size - layer; i ++){
            const top = matrix[layer][i];
            const right = matrix[i][size - layer];
            const bottom = matrix[size-layer][size - i];
            const left = matrix[size - i][layer];

            matrix[layer][i] = left;
            matrix[i][size - layer] = top;
            matrix[size - layer][size - i] = right;
            matrix[size - i][layer] = bottom;
        }
    }
    return matrix
};
