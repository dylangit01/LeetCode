/**
 * @param {string} digits
 * @return {string[]}
 */

// If using array for dMap, it must have index 1 and 0 for empty "", so the index 2 = "abc", and so on:
    // const dMap = [
    //    '', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'
    // ]

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
        // if curDigitIndex === digits.length, meaning it already includes all digits combinations and should return. There is no situation that curDigitIndex larger than digits.length
        // So it is the base of this recursion
        if(curDigitIndex === digits.length) {
            return combs.push(combLetters);
        }
        // digits are strings, so digits.charAt(curDigitIndex) meaning the character of this index position
        const digitChar = digits.charAt(curDigitIndex);
        // this will turn the string to number
        const digitInt = digitChar - '0';

        const letters = dMap[digitInt];
        for(let i = 0; i < letters.length; i++){

            let eachLetter = letters[i];
            // find the first character, e.g. if input is 22, below will find "a"
            combLetters += eachLetter;

            // Recursively to find all possible combination, but only adding one character at each time, meaning if input is 22, the first combination will be "aa"
            combinationsHelper(curDigitIndex + 1, combLetters, digits, combs);

            // here is very important step but hard to understand, for example, if input is 22, so if no below codes, the combination will be "aa, aab, aabc, bb, bba, bbac, cc, cca, ccab"
            // So here to only choose the combination fit the input length
            combLetters = combLetters.substring(0, combLetters.length - 1)

        }
    };

    combinationsHelper(0, '', digits, combs);
    return combs

};
