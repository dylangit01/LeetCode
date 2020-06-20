/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = (head, k) => {
    if(head === null) return head;

    // Find the tail and list length (so we can adjust k)
    let tail = head;
    let size = 1;
    while (tail.next !== null) {
        size++;
        tail = tail.next;
    }

    // Normalize k
    k %= size;
    // No adjustment when k === 0;
    if(k === 0) return head;

    // Cycling this list:
    tail.next = head;

    let stepsToNewTail = size - k;      // this is the position of new list head
    let rotatedListTail = tail;         // from line 14, the tail is actual tail node of this list

    while (stepsToNewTail > 0){
        // current tail node will be go stepsToNewTail steps from head as tail.next = head in line 23
        rotatedListTail = rotatedListTail.next;
        stepsToNewTail--;
    }
    const rotatedListHead = rotatedListTail.next;
    rotatedListTail.next = null;

    return rotatedListHead;
};

// Practice:

const shiftLinkedList = (head, k)=> {
    if(head === null) return head;

    let tail = head;
    let size = 1;
    while (tail.next){
        tail = tail.next;
        size++
    }

    k %= size;

    if(k === 0) return head;

    tail.next = head;
    let stepsToNewHead = size - k;
    let rotatedTail = tail;
    while (stepsToNewHead > 0){
        rotatedTail = rotatedTail.next;
        stepsToNewHead--
    }

    const rotatedHead = rotatedTail.next;
    rotatedTail.next = null;

    return rotatedHead
};


