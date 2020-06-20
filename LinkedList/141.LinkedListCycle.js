/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    const set = new Set();

    let curr = head;
    while(curr){
        if(set.has(curr)){
            return true
        }
        set.add(curr);
        curr = curr.next
    }
    return false;
};

// The second method has bug:
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycleII = (head) => {
    let slow = head;
    let fast = head;

    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }
    return false;
};
