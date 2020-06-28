/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let matches = 0;
    const unMatchedChars = new Set();

    for(let i = 0; i < s.length; i++){
        const char = s.charAt(i);

        if(unMatchedChars.has(char)){
            unMatchedChars.delete(char);
            matches++
        } else unMatchedChars.add(char)
    }
    // if unMatchedChars has "char", meaning two same chars found, so the matchings++, and longestPa length = matchings * 2
    let longestPa = matches *2;
    // when no matches or there are three letters like aab, it can be built as "aba", so the longestPa is 3
    if(unMatchedChars.size !== 0){
        longestPa++
    }
    return longestPa
};
