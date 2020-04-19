/**
 * @param {Array<string>} A
 * @param {Array<string>} B
 * @return {Array<string>}
 */
const wordSubsets = (A, B) => {
    // First, we may assume all words in A & B are lower cases, if not, we can easily convert them to lower cases
    const bCount = Array(26).fill(0);

    // create a count function for both loops: this function indicates the idx position has letter exists and count its number
    // And this fun has be written before all other codes if using it:
    const countFun = (word) => {
        const output = Array(26).fill(0);

        for(let i = 0; i < word.length; i ++){
            const letter = word.charAt(i);

            const idx = letter.charCodeAt(0) - 'a'.charCodeAt(0);
            output[idx] += 1
        }
        return output
    };

    for(let i = 0; i < B.length; i ++){
        const wordInB = B[i];
        const tmpCountOfB = countFun(wordInB);

        for(let j = 0; j < 26; j++){
            // here is to verify if "aaa" && "aa" exist, "aaa" will replace "aa"
            bCount[j] = Math.max(bCount[j], tmpCountOfB[j])
        }
    }

    const actualOutput = [];
    for(let i = 0; i < A.length; i ++){
       const wordInA = A[i];
       const tmpCountOfA = countFun(wordInA);

       let universal = true;
       for(let j = 0; j < 26; j ++){
           if(tmpCountOfA[j] < bCount[j]) universal = false;
       }

       if(universal){
           actualOutput.push(wordInA)
       }
    }
    return actualOutput;
};
