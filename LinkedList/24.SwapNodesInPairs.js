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
var swapPairs = function(head) {
    if(head === null || head.next === null) return head;

    let first = head;
    let sec = head.next;
    let startOfNextPair = null;

    // Move the head of the list to the 2nd node in the list
    // Because when first swap happened, the head will be the sec node, so when return head, this has to be the first:
    head = head.next;

    while (true){
        // this points to the first node of next pair
        startOfNextPair = sec.next;
        // swap the pair
        sec.next = first;

        // if condition === null, then the next node will be any one of them or null, then return the list
        if(startOfNextPair === null || startOfNextPair.next === null){
            first.next = startOfNextPair;

            // this return will be final step since eventually, startOfNextPair will be null
            return head;
        }
        // if condition !== null, then first.next --> startOfNextPair.next
        first.next = startOfNextPair.next;

        // continue the loop by moving the pointers
        first = startOfNextPair;
        sec = startOfNextPair.next;
    }
};

// Time is O(n), space is O(1)
