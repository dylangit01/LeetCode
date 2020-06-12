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

class Trie {
    constructor() {
        this.root = {}
    }

    insert(word) {
        // insert method is traversal the whole trie nodes and if not exist, then create one:
        let node = this.root;
        // The for/of statement loops through array, not object, for(let in) is for object.
        for (let character of word) {
            // if !node[character], we create a new node => {} as there are more character need to be added in this map, and let node = this new node, then continue the loop
            // Here, node is a map, node[character] is the key and value
            // so if(!node[character]) means if this map doesn't contain this key and its value
            // Then it will create a new map {} trie node
            if (!node[character]) {
                // node[character] = new Trie(), same as node[character] = {}, just create a new Trie node
                node[character] = {};
            }
            // Then keep travelling through the whole word
            node = node[character]
        }
        // when insert the last character, we add isWordEnd as true, meaning this word ends with this character.
        node.isWordEnd = true
    }

     traverse(word) {
         let node = this.root;
         for (let char of word) {
             if (!node[char]) return false
             // continue loop
             node = node[char];
         }
         return node
     }

     search(word){
        const node = this.traverse(word);
         // when find a word and its last char has the isWordEnd = true, meaing
         return node.isWordEnd === true
     }

     searchMehodII(word){
        let node = this.root;
        for(let char of word) {
            if(!node[char]){
                return false;
            }
            node = node[char]
        }
        return node.isWordEnd === true;
     }

     startsWith(prefix){
        // here cannot using: return this.traverse(prefix) as it return the node, not boolean, so using "!!"
        return !!this.traverse(prefix)
     }

     startWithII(prefix){
        let node = this.root;
        for(let char of prefix){
            if(!node[char]) return false;

            node = node[char]
        }
        return true;
     }
}


// Practice:

// class Tire {
//     constructor() {
//         this.root = {}
//     }
//
//     insert(word){
//         let node = this.root;
//         for(let char of word){
//             if(!node[char]) node[char] = {};
//             node = node[char]
//         }
//         node.isWordEnd = true
//     }
//
//     traverse(word){
//         let node = this.root;
//         for(let char of word){
//             node = node[char];
//             if(!node) return false
//         }
//         return node
//     }
//
//     search(word){
//         const node = this.traverse(word);
//         return node.isWordEnd === true
//     }
//
//     startsWith(prefix){
//         return !!this.traverse(prefix)
//     }
// }



/*
Beware! Setting Object properties works for Map objects as well, and can cause considerable confusion.

Therefore, this still sort-of works....

let wrongMap = new Map()
wrongMap['bla'] = 'blaa'
wrongMap['bla2'] = 'blaaa2'

console.log(wrongMap)  // Map { bla: 'blaa', bla2: 'blaaa2' }
...But, it does not behave as expected:

wrongMap.has('bla')    // false
wrongMap.delete('bla') // false
console.log(wrongMap)  // Map { bla: 'blaa', bla2: 'blaaa2' }
And there's very little difference from the correct usage, anyway:

let myMap = new Map()
myMap.set('bla','blaa')
myMap.set('bla2','blaa2')
console.log(myMap)  // Map { 'bla' => 'blaa', 'bla2' => 'blaa2' }

myMap.has('bla')    // true
myMap.delete('bla') // true
console.log(myMap)  // Map { 'bla2' => 'blaa2' }
 */
