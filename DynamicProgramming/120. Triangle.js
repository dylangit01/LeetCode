/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let rows = triangle.length;
    // be careful the rowStartsFromSecLast should >=0;
    for(let rowStartsFromSecLast = rows - 2; rowStartsFromSecLast >= 0; rowStartsFromSecLast--){
        let row = triangle[rowStartsFromSecLast];
        for(let i = 0; i < row.length; i++){
            // calculating the first item value starts from second to last row, it's value equals the Math.min of last row first item and second item
            row[i] = row[i] + Math.min(triangle[rowStartsFromSecLast + 1][i], triangle[rowStartsFromSecLast + 1][i + 1])
        }
    }
    return triangle[0][0]
};
