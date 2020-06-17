
/**
 * @param {Array<string>} sentence
 * @return {number}
 */
const distanceOfClosestRepeatedEntries = (sentence) => {
    const map = {};
    let repeatedDis = Number.MAX_SAFE_INTEGER;

    for(let i = 0; i < sentence.length; i++){
        const word = sentence[i];

        // verify if a "key" in an object. using "if(key in object)", dont use "object[key]", because object[key]= value
        if(word in map){
            const lastShowupIndex = map[word];
            const distanceToLastShowup = i - lastShowupIndex;   // this "i" is when sentence[i] is in the map, it shows again in the sentence, so the distance = i - last time index

            repeatedDis = Math.min(repeatedDis, distanceToLastShowup)
        }
        map[word] = i;
    }
    return repeatedDis === Number.MAX_SAFE_INTEGER ? -1 : repeatedDis
};


// object function:
myFun = () => {
    let wordToIndexLastSeenAt = {dylan:0,words:1,sienna:2,ok:3,pen:4,cat:5};
    const myWord = 'sienna';        // ==> meaning the key

    if(myWord in wordToIndexLastSeenAt){
        const lastIndex = wordToIndexLastSeenAt[myWord];    // ==> meaning the value of this key
        console.log(lastIndex)
    }
};
myFun();
