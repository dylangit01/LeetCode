/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.random = null;
    }
}

randomListNode = (head) => {
    if(!head) return null;

    let map = new Map();

    let curr = this.head;

    while (curr) {
        // map.set() function is adding or updating key and value of this map object
        map.set(curr, new ListNode(curr.val));
        curr = curr.next;
    }

    curr = head;
    while (curr){
        map.get(curr).next = map.get(curr.next);

        map.get(curr).random = map.get(curr.random);

        curr = curr.next
    }

    return map.get(head)
};
