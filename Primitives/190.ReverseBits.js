/* The method to convert nums to bits under base 8:
    E.g: 75:
        75 / 2 = 37.5 ==> 37, remain 0.5, meaning bit number is 1;
        37 / 2 ==> 18, remain 0.5, meaning bit number is 1;
        18 / 2 ==> 9, remain 0, meaning bit number is 0;
        9 / 2 ==> 4, remain 0.5, meaning bit number is 1;
        4 / 2 ==> 2, remain 0, meaning bit number is 0;
        2 / 2 ==> 1, remain 0, meaning bit number is 0;
        1 / 2 ==> 0.5, meaning bit number is 1;

        So the binary number under base 8 is from bottom to top: 1001011

    The method to convert bit number to decimal number:
    E.g: 00001010 ==> ignore previous "0", so it comes 1010, and 1010 starts from left to right can use "2^3, 2^2, 2^1, 2^0" to represent
    so the decimal number calculate like this: 2^3 * 1 + 2^2 * 0 + 2^1 * 1 + 2^0 * 0 = 10, since 0 * any number is 0, so we only use "1" to calculate:
    so it comes to: 2^3 * 1 + 2^1 * 1 = 10

*/

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
        // first shift output by 1
        output <<= 1;

        // then check if the last bit of the input is === 1: if
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
