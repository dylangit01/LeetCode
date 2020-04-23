/**
 * @param {ListNode} head
 * @return {ListNode}
 */

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
        return this
    }
}

getIntersectionNode=(l1 = new LinkedList, l2 = new LinkedList)=> {
    let firstListNodes = new Set();

    let curr = l1;
    while (curr !== null){
        firstListNodes.add(curr);
        curr = curr.next;
    }

    let curr2 = l2;
    while (curr2 !== null){
        if(firstListNodes.has(curr2)){
            return curr2;
        }
        curr2 = curr2.next;
    }
    // if no intersectionNode, return null
    return null
};
