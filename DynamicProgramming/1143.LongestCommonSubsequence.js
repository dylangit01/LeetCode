/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    // below is establish a cache/dp to build a matrix with text1 is row and text2 is column;
    // the reason to let length + 1 is adding the empty "" to both text string when there is no string to match, when no match, the subsequence will be "0"
    // so for first row and first column array will be "0"
    const dp = Array(text1.length + 1).fill(0).map(()=>Array(text2.length + 1).fill(0));

    //
    let maxLength = 0;
    // since we add one empty "" to dp, we compare starts from i = 1;
    // also since we add one to both texts, the last character of both text is i <= text.length
    for(let i = 1; i <= text1.length; i++){
        for(let j = 1; j <= text2.length; j++){
            if(text1[i - 1] === text2[j - 1]){
                // if first character of text1 === first character of text2, then we use this one match to plus "previous matched subsequence when delete both last matched character"
                dp[i][j] = 1 + dp[i - 1][j - 1]
            } else {
                // if no match happens, we just need to find out the max matched character times when ether deleter last character from text1 or from text2
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
            // after all loops, to check the maximum length
            maxLength = Math.max(maxLength, dp[i][j])
        }
    }
    return maxLength
};
