/**
 * @param {string} digits
 * @return {string[]}
 */

// If using array for dMap, it must have index 1 and 0 for empty "", so the index 2 = "abc", and so on:
    // const dMap = [
    //    '', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'
    // ]

    // Time: O(4^n)
    // Space: O(n)

const dMap = {
        '2' : ['a', 'b', 'c'],
        '3' : ['d', 'e', 'f'],
        '4' : ['g', 'h', 'i'],
        '5' : ['j', 'k', 'l'],
        '6' : ['m', 'n', 'o'],
        '7' : ['p', 'q', 'r', 's'],
        '8' : ['t', 'u', 'v'],
        '9' : ['w', 'x', 'y', 'z'],
    };

let letterCombinations = function(digits) {
    if(digits.length === 0) return [];

    const combs = [];

    const combinationsHelper = (curDigitIndex, combLetters, digits, combs)=> {
        // if curDigitIndex === digits.length, meaning it already includes all digits combinations and should return.
        // There is no situation that curDigitIndex larger than digits.length
        // So it is the base of this recursion, and it actually gets to run only when below recursive functions satisfied the length condition
        if(curDigitIndex === digits.length) {
            return combs.push(combLetters);
        }
        // digits are strings, so digits.charAt(curDigitIndex) meaning the character of this index position, but this character is "number" like "3" or "any number"
        const digitChar = digits.charAt(curDigitIndex);
        // this will turn the string to number like: "3" - "0" = 3
        const digitInt = digitChar - '0';

        const letters = dMap[digitInt];
        for(let i = 0; i < letters.length; i++){

            let eachLetter = letters[i];
            // find the first character, e.g. if first eachLetter is base on 2, below will find "a" first, and combLetters is empty '' at the beginning
            combLetters += eachLetter;

            // Recursively to find all possible combination, but only adding one character at each time, meaning if input is 22, the first combination will be "aa"
            // This recursion is explosion on each single character, when finish, it will return it self, and since we add the combLetters to itself in above line, we need to remove it
            combinationsHelper(curDigitIndex + 1, combLetters, digits, combs);

            // here is very important step but hard to understand, for example, if input is 22, so if no below codes, the combination will be "aa, aab, aabc, bb, bba, bbac, cc, cca, ccab"
            // So here to only choose the combination fit the input length
            combLetters = combLetters.substring(0, combLetters.length - 1)

        }
    };

    combinationsHelper(0, '', digits, combs);
    return combs

};
