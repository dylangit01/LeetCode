/**
 * @param {number} rows
 * @param {number} cols
 * @return {number}
 */
const uniquePaths = (rows, cols) => {
    const pathsNums = []; // make pathsNums a Matrix

    for(let rowIndex = 0; rowIndex < rows; rowIndex++){
        // each row has the number of length of cols, so each row has [0, 0, 0, 0, 0, 0, 0, 0...]
        const row = Array(cols);
        row.fill(0);
        // initiate pathNums(Matrix) according to rows and cols, every cell is 0;
        pathsNums[rowIndex] = row
    }

    // 1 unique way to get to left column cells (go straight down)
    for(let row = 0; row < rows; row++){
        pathsNums[row] = 1;
    }
    // 1 unique way to get to the top row cells (go straight right)
    for(let col = 0; col < cols; col++){
        pathsNums[0].push(1);
    }

    /*
    Unique ways to inner position is combination of unique ways coming
    from both possible directions
  */
    for(let row = 1; row < rows; row++){
        for(let col = 1; col < cols; col++){
            const pathsToAboveCell = pathsNums[row -1][col];
            const pathsToLeftCell = pathsNums[row][col -1];

            pathsNums[row][col] = pathsToAboveCell + pathsToLeftCell;
        }
    }
    return pathsNums[rows -1][cols - 1]
};

// Another method:
uniquePathsII = (m, n) => {
    const uniquePaths = [];

    for(let row = 0; row < m; row++){
        uniquePaths[row] = [1]
    }

    for(let col = 0; col < n; col++){
        uniquePaths[0].push(1)
    }

    // calculate the paths when at first subcell (1,1)
    for(let row = 1; row < m; row++){
        for(let col = 1; col < n; col++){
            uniquePaths[row][col] = uniquePaths[row - 1][col] + uniquePaths[row][col - 1]
        }
    }
    return uniquePaths[m-1][n-1]    // index stars from 0, so m-1
};
