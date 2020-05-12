/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const res = [];

    const isPalindrome=(left, right) => {
        while(left < right){
            if(s[left] !== s[right]) return false;
            left++;
            right--
        }
        return true;
    };

    const findPal = (currIndex, list = [])=> {
        // this difference with question 78 is: 78 is finding all possible combinations,
        // but this one has one condition of finding palindrome,
        // so it has to be when currIndex === s.length and return,
        // but 78 uses push all possible combs.
        if(currIndex === s.length) return res.push(list);

        for(let i=currIndex; i < s.length; i++){
            if(isPalindrome(currIndex, i)){
                findPal(i+1, [...list, s.slice(currIndex, i+1)])
            }
        }
    };

    findPal(0, []);

    return res
};
