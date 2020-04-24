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
var oddEvenList = function(head) {
    if(head === null || head.next === null) return head;

    const oddDummyHead = new ListNode(0);
    const evenDummyHead = new ListNode(0);

    let oddTail = oddDummyHead;
    let evenTail = evenDummyHead;

    let index = 1;
    let curr = head;

    while(curr){
        if(index % 2 !== 0){
            oddTail.next = curr;
            oddTail = curr
        } else {
            evenTail.next = curr;
            evenTail = curr;
        }
        curr = curr.next;
        index++
    }

    oddTail.next = evenDummyHead.next;
    evenTail.next = null;

    return oddDummyHead.next;
};
