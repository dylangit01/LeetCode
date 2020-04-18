/**
 * @param {Array<string>} words
 * @param {string} pattern
 * @return {Array<string>}
 */
const findAndReplacePattern = (words, pattern) => {
    // first create an array to store matched words
    const matches = [];

    // create a closure function to compare word and pattern

    // if both length are not match, return false;
    const isAligned = (word) => {
        if (word.length !== pattern.length) return false;

        // create ascii-code arrays for both word and pattern
        const wordToPattern = Array(256).fill(0);
        const patternToWord = Array(256).fill(0);

        // Every step to build a cross mapping and see if it breaks
        // find charCodes for both:
        for (let i = 0; i < word.length; i++) {
            const wordCharNum = word.charAt(i).charCodeAt(0);
            const patternCharNum = pattern.charAt(i).charCodeAt(0);

            if (wordToPattern[wordCharNum] === 0) {
                wordToPattern[wordCharNum] = patternCharNum;
            }

            if (patternToWord[patternCharNum] === 0) {
                patternToWord[patternCharNum] = wordCharNum;
            }

            if (
                wordToPattern[wordCharNum] !== patternCharNum ||
                patternToWord[patternCharNum] !== wordCharNum
            ) {
                return false
            }
        }
        return true;
    };

    words.forEach(word => {
        if (isAligned(word)) {
            matches.push(word)
        }
    });
    return matches;
};
