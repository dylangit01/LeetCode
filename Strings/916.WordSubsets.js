/**
 * @param {string[]} A
 * @param {string[]} B
 * @return {string[]}
 */
var wordSubsets = function(A, B) {
    const res = [];
    const combinedLettersInB = Array(26).fill(0);

    const countFun = (word)=> {
        const output = Array(26).fill(0);

        for(let i = 0; i < word.length; i ++){
            const letter = word.charAt(i);

            const idx = letter.charCodeAt(0) - "a".charCodeAt(0);
            output[idx] += 1;
        }
        return output;
    };

    for(let i = 0; i < B.length; i ++){
        const wordInB = B[i];
        const countOfB = countFun(wordInB);

        for(let j = 0; j < 26; j ++){
            combinedLettersInB[j] = Math.max(combinedLettersInB[j], countOfB[j])
        }
    };

    for(let i = 0; i < A.length; i ++){
        const wordInA = A[i];
        const countOfA = countFun(wordInA)

        let universal = true;
        for(let j = 0; j < 26; j ++){
            if(countOfA[j] < combinedLettersInB[j]) universal = false;
        }

        if(universal){
            res.push(wordInA)
        }
    }
    return res;
};
