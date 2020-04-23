/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

const removeKthToLast = (head, k) => {
    const dummyHead = new LinkedList(-1);
    dummyHead.next = head;

    let right = dummyHead.next;
    while (k > 0){
        right = right.next;
        k--
    }

    let left = dummyHead;
    while (right !== null){
        left = left.next;
        right = right.next;
    }

    left.next = left.next.next;

    return dummyHead.next

};
