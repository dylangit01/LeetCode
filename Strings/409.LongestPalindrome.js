/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let matchings = 0;
    const unMatchedChars = new Set();

    for(let i = 0; i < s.length; i++){
        const char = s.charAt(i)

        if(unMatchedChars.has(char)){
            unMatchedChars.delete(char);
            matchings++
        } else unMatchedChars.add(char)
    }

    let longestPa = matchings *2;
    if(unMatchedChars.size !== 0){
        longestPa++
    }
    return longestPa
};
