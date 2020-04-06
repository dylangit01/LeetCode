/*Implement a trie with insert, search, and startsWith methods.

    Example:

Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");
trie.search("app");     // returns true
Note:

    You may assume that all inputs are consist of lowercase letters a-z.
    All inputs are guaranteed to be non-empty strings.
*/

// class Trie {
//     constructor() {
//         this.root = {}
//     }
//
//     insert(word) {
//         let node = this.root;
//         // The for/of statement loops through the values of an iterable object.
//         for (let character of word) {
//             // if !node[character], we create a new map {} as there are more character need to be added in this map, and let node = this new node, then continue the loop
//             if (!node[character]) node[character] = {};
//             node = node[character]
//         }
//         // this character is pointing to the word end
//         node.isWord = true
//     }
//
//      traverse(word) {
//          let node = this.root;
//          for (let char of word) {
//              node = node[char];
//              if (!node) return false
//          }
//          return node
//      }
//
//      search(word){
//         const node = this.traverse(word);
//          return node.isWord === true
//      }
//
//      startsWith(prefix){
//         // here cannot using: return this.traverse(prefix) as it return the node, not boolean, so using "!!"
//         return !!this.traverse(prefix)
//      }
// }


class Tire {
    constructor() {
        this.root = {}
    }

    insert(word){
        let node = this.root;
        for(let char of word){
            if(!node[char]) node[char] = {};
            node = node[char]
        }
        node.isWord = true
    }

    traverse(word){
        let node = this.root;
        for(let char of word){
            node = node[char];
            if(!node) return false
        }
        return node
    }

    search(word){
        const node = this.traverse(word);
        return node.isWord === true
    }

    startsWith(prefix){
        return !!this.traverse(prefix)
    }

}
