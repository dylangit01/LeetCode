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

// DOUBLE POINTER: Right is the fast pointer based on K, left is the slow pointer based on right pointer movement
// when (while(right))
const removeKthToLastII = (head, k) => {
    const dyHead = new ListNode();
    dyHead.next = head;

    let right = head;
    while(k > 0){
        right = right.next;
        k--
    }

    let left = dyHead;
    while(right){
        right = right.next;
        left = left.next;
    }
    left.next = left.next.next;
    return dyHead.next;
}
