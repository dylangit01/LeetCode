/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const res = [];

    const isPalindrome = (left, right) => {
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
            /*
            Solving steps:
            First, when currIndex = 0, i = 0, if condition is true, which is a, list is "a", then go to recursive fun, then, currIndex = 0 + 1 =1, i = 1, if is true, list = "a", "a",
            then currIndex = i + 1 = 1+ 1 =2, i = 2, list = "a", "a", "b", and since currIndex = s.length, so push to res;
            Next, using [...list, s.slice(currIndex, i+1)] to backtrack (delete the last item: s.slice(1,1) meaning delete itself) until the list is empty;
            Then, back to for loop again, this time currIndex = 0, i = 1, use if condition to verify "aa", and it is true, go to recursive fun, this time, currIndex = 2, i = 2;
            so "b" is adding to the list, and since currIndex = s.length, add to res, then backtrack again until empty
                0 0
                1 1
                2 2
                [ 'a', 'a' ] backtrack: b
                [ 'a' ] backtrack: a
                [] backtrack: a
                0 1
                2 2
                [ 'aa' ] backtrack: b
                [] backtrack: aa;
             */
            if(isPalindrome(currIndex, i)){
                findPal(i+1, [...list, s.slice(currIndex, i+1)])
            }
        }
    };

    findPal(0, []);

    return res
};


// Practice:

const PalindromePartitioning = (s) => {
    const res = [];

    const isPal=(left, right)=> {
        while (left < right){
            if(s[left] !== s[right]) return false;
            left++;
            right--;
        }
        return true;
    };

    const helper =(index, curr)=> {
        if(index === s.length) return res.push(curr);

        for(let i = index; i < s.length; i++){
            if(isPal(index, i)){
                helper(i+1, [...curr, s.slice(index, i+1)])
            }
        }

    };
    helper(0, []);
    return res;
};





























