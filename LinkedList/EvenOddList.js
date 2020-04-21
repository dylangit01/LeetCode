/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Method A: Using Dummy Head:
const oddEvenList = (head) => {
    if(head === null || head.next === null) return head;

    const oddDummyHead = new LinkedList(-1);
    const evenDummyHead = new LinkedList(-1);

    // Initial status is letting tail = dummyHead
    let oddTail = oddDummyHead;
    let evenTail = evenDummyHead;

    let index = 0;
    let curr = head;

    while (curr !== null){
        if(index % 2 === 0){
            // below saying evenTail is a dummy node, so it's next will be curr, meaning the pointer to the curr
            // so if not writing evenTail.next = curr, when curr = curr.next, there is no linked pointer to next node
            evenTail.next = curr;
            // then move the evenTail node to curr node
            evenTail = curr;
        } else {
            oddTail.next = curr;
            evenTail = curr;
        }
        curr = curr.next;
        index++;
    }
    // after the while loop, we need to link the even part tail.next to the head of odd part,
    // but not the oddDummyHead, instead the next node which is actual node
    // so:
    evenTail.next = oddDummyHead.next;
    // and end the oddTail.next to null
    oddTail.next = null;

    return evenDummyHead.next;
};

// Method B: Using Fewer Pointers
const evenOddList = (head) => {
    if(head === null || head.next === null) return head;

    let even = head;
    let odd = head.next;

    // Below is letting oddHead holding the first odd node, so that later the even.next can link to it
    let oddHead = odd;

    while (odd !== null && even !== null){
        even.next = odd.next;
        even = odd.next;
        odd.next = even.next;
        odd = even.next;
    }
    even.next = oddHead;

    return head;
};
