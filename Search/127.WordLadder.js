/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    // const dict is an Object with wordList: {'a', 'b', 'c'...}
    const dict = new Set(wordList);
    let queue = [beginWord];
    let step = 1;

    while(queue.length){
        const next = [];
        for(let word of queue){         // i.e: hit
            // the condition of jumping out the while loop is when queue word === endWord:
            if(word === endWord) return step;
            for(let i = 0; i < word.length; i++){           //
                for(let j =0; j<26; j++){           // loop 26 letters a - z
                    // when i = 0, j = 0, word.slice(0) === null, word.slice(0+1) === it, (meaning starts from position 1, get all rest characters)
                    // so neighborWord = ait
                    // The slice() method returns the selected elements in an array, as a new array object.
                    const neighborWord = word.slice(0,i) + String.fromCharCode(97+j) + word.slice(i + 1);
                    if(dict.has(neighborWord)){
                        next.push(neighborWord);
                        dict.delete(neighborWord);
                    }
                }
            }
        }
       queue = next;
        ++ step
    }
    return 0
};
