let longestWord = (words) => {
    // create a set Object base on this string array words
    let set = new Set(words);
    // let result = a string:
    let result = '';
    words.forEach(word => {
        if (word.length < result.length) return;
        if (word.length === result.length && word > result) return;
        // let a = "aab"
        // let b = "aac"
        // console.log((a<b)) => true

        // below is to verify if each word can be built one character at a time:
        // also, has to loop from the longest position one by one to the first character, meaning if this word
        // is not built one char at a time, it will return null, not return the result of the word
        for (let i = word.length - 1; i > 0; i--) {
            if (!set.has(word.substring(0, i))) return;
        }
        result = word
    });
    return result
};
