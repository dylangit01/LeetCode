/*
    * Approach:
    *   1. Check the last bit of input
    *   2. Shift output left
    *   3. If it is 1, add it to output (do nothing otherwise)
    *   4. Shift input right
    *
    * Stop when input is 0
    */

const reverseBits = (input) => {
    let output = 0;

    while (input !== 0) {
        output <<= 1;

        if ((input & 1) === 1) {
            output |= 1;
        }
        input >>= 1;
    }

    return output;
};

// LeetCode question is different with video question as LeetCode requires 32 bits, so

var reverseBitsForLeetCode = function(n) {
    let result = 0;

    for(let i = 0; i < 32; i++) {
        result <<= 1;
        result |= n & 1;
        n >>= 1;
    }

    return result >>> 0;
};
