/**
 * @param {number} capacity
 */


/**
 * @param {number} key
 * @return {number}
 */


/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */


/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

class LRUCache {
    constructor(capacity) {
        this.map = new Map();
        this.capacity = capacity;
    }

    get(key){
       if(!this.map.has(key)) return -1;
       const val = this.map.get(key);
       this.map.delete(key);
       this.map.set(key, val);
       return val;
    }

    put(key,value){
        // if map has this key already
        this.map.delete(key);
        this.map.set(key, value);
        if(this.map.size > this.capacity){
            // Notice: map.keys().next().value ==> return the first key,not the value!!
            const firstItem = this.map.keys().next().value;
            this.map.delete(firstItem)
        }
    }
}

// Using DoubleLinkedList and Object method:
class Node {
    constructor(key,val) {
        this.key = key;
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(key, val){
        const newNode = new Node(key, val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return newNode;
    }

    remove(node){
        if(!node.next && !node.prev){
            this.head = null;
            this.tail = null;
        } else if(!node.next){
            this.tail = node.prev;
            node.prev.next = null;  // or this.tail.next = null;
        } else if(!node.prev){
            this.head = node.next;
            this.head.prev = null;
        } else {
            node.prev.next = node.next;
            node.next.prev = node.prev;
        }
        this.length--
    }
}

class LRUCache {
    constructor(capacity) {
        this.DLL = new DoubleLinkedList();
        this.obj = {};
        this.capacity = capacity;
    }

    get(key){
        if(!this.obj[key]) return -1;

        const val = this.obj[key].val;
        this.DLL.remove(this.obj[key]);
        // Here have to update obj, so that can get the val of this obj[key]
        this.obj[key] = this.DLL.push(key, val);
        return val;
    }

    put(key, value){
        if(this.obj[key]) this.DLL.remove(this.obj[key]);
        // Same here, need to update obj
        this.obj[key]= this.DLL.push(key, value);
        if(this.DLL.length > this.capacity){
            const currKey = this.DLL.head.key;
            delete this.obj[currKey]
            this.DLL.remove(this.DLL.head)
        }
    }
}














