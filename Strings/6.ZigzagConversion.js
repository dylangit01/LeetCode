/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    const output = Array(numRows).fill('');

    let row = 0;
    let down = false;

    for (let i = 0; i < s.length; i++) {
        output[row] += s.charAt(i);

        if (row === 0 || row === numRows - 1) {
            down = !down
        }

        if (numRows > 1) {
            if (down === true) {
                row++
            } else row--
        }
    }
    return output.join('')
};
