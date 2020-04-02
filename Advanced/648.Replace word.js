// 这道题最好的解法其实是用前缀树(Trie / Prefix Tree)来做，关于前缀树使用之前有一道很好的入门题Implement Trie (Prefix Tree)。
// 了解了前缀树的原理机制，那么我们就可以发现这道题其实很适合前缀树的特点。
// 我们要做的就是把所有的前缀都放到前缀树里面，而且在前缀的最后一个结点的地方将标示isWord设为true，
// 表示从根节点到当前结点是一个前缀，然后我们在遍历单词中的每一个字母，我们都在前缀树查找，
// 如果当前字母对应的结点的表示isWord是true，我们就返回这个前缀，如果当前字母对应的结点在前缀树中不存在，
// 我们就返回原单词，这样就能完美的解决问题了

class Trie {
    constructor() {
        this.root = {}
    }

    // add/insert dict word as the prefix tree word as reference
    insert(word){
        let node = this.root;
        for(let char of word){
            if(!node[char]) node[char] = {};
            node = node[char]
        }
        node.end = true
    }

    // judge if the word of sentence matches with root word
    getRootWord(word){
        let node = this.root;
        let rootWord = '';

        for(let char of word) {
            // match if the char of word belongs to Trie.node
            if (node[char]) {
                rootWord += char;
                // when found the 1st matched word, if it's end === true, return this rootWord, if not, continue loop
                if(node[char].end) return rootWord;
                // looping through the word
                node = node[char]
            } else return null
            // this else condition is very important, if without this condition,
            // the char will loop over every word and return any word that matches with the dict rootWord
            // with this condition, it only return rootWord when the first char matches with the dict rootWord
        }
        // if no rootWord found, return null
        return null
    }
}

const replaceWords = (dict, sentence) => {
    const t = new Trie();
    for(const rootWord of dict){
        t.insert(rootWord)
    }
    // The split() method is used to split a string into an array of substrings,
    // and returns the new array. i.e: "How are you doing today?" => [How are you doing today?]
    // If split(' '), then return ['How', 'are', 'you', 'doing', 'today?']
    // If an empty string ("") is used as the separator,
    // the string is split between each character. i.e: [H,o,w, ,a,r,e, ,y,o,u, ,d,o,i,n,g, ,t,o,d,a,y,?]
    let words = sentence.split(" ");   // here needs to use split(' ')
    for(let i =0; i < words.length; i ++){
        let root = t.getRootWord(words[i]);
        if(root) words[i] = root   // if matches with root word and return true, replace the words[i] to this rootWord
    }
    return words.join(" ")
};






























