
/**
 * @param {Array<string>} sentence
 * @return {number}
 */
const distanceOfClosestRepeatedEntries = (sentence) => {
    const map = {};
    let repeatedDis = Number.MAX_SAFE_INTEGER

    for(let i = 0; i < sentence.length; i++){
        const word = sentence[i]

        // verify if a key in an object. using "if(key in object)", dont use "object[key]"
        if(word in map){
            const lastShowupIndex = map[word];
            const distanceToLastShowup = i - lastShowupIndex;

            repeatedDis = Math.min(repeatedDis, distanceToLastShowup)

        }

        map[word] = i;

    }
    return repeatedDis === Number.MAX_SAFE_INTEGER ? -1 : repeatedDis
};

// remember, object[] means the key, not the value
myFun = () => {
    let wordToIndexLastSeenAt = {dylan:0,words:1,sienna:2,ok:3,pen:4,cat:5}
    const myWord = 'sienna';

    if(myWord in wordToIndexLastSeenAt){
        const lastIndex = wordToIndexLastSeenAt[myWord]
        console.log(lastIndex)
    }
}
myFun()
