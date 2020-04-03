let longestWord = (words)=>{
    let set = new Set(words);
    let result = '';
    words.forEach(a => {
        if(a.length < result.length) return;
        if(a.length === result.length && a > result) return;
        // let a = "aab"
        // let b = "aac"
        // console.log(!(a>b)) => true

        // below is to verify if the word can be built one character at a time:
        // also, has to loop from the longest position, meaning if this word
        // is not built one char at a time, it will return
                for(let i = a.length-1; i > 0; i --){
            if( !set.has(a.substring(0, i))) return;
        }
        result = a
        });
        return result
};
