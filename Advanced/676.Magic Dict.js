/**
 * Initialize your data structure here.
 */
var MagicDictionary = function() {
    this.words = [];
};

/**
 * Build a dictionary through a list of words
 * @param {string[]} dict
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dict) {
    this.words = dict;
};

/**
 * Returns if there is any word in the trie that equals to the given word after modifying exactly one character
 * @param {string} word
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(subject) {
    const matches = this.words.filter(word => {
        if (word.length !== subject.length) return false;
        let swapped = false;
        for (let i = 0; i < word.length; i++) {
            if (word[i] !== subject[i]) {
                if (swapped) return false;
                swapped = true;
            }
        }
        return swapped;
    });
    return Boolean(matches.length);
};

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dict)
 * var param_2 = obj.search(word)
 */

// class MagicDictionary {
//     constructor() {
//         this.words = []
//     }
//
//     search(subject) {
//         const matches = this.words.filter(word => {
//                 if (word.length !== subject.length) return false;
//                 let firstDifference = false;
//                 for (let i in word) {
//                     if (word[i] !== subject[i]) {
//                         if (firstDifference) return false;
//                         firstDifference = true
//                     }
//                 }
//                 return firstDifference
//             }
//         );
//         return !!(matches.length)
//     }
//
//
// }
//
// const magicDic = (dict, searchWord) => {
//     const md = new MagicDictionary();
//     md.words = dict;
//     md.search(searchWord)
// };








