/**
 * @param {ListNode} head
 * @param {number} start
 * @param {number} end
 * @return {ListNode}
 */
const reverseBetween = (head, start, end) => {
    if(start === end) return head;

    let dummyHead = new ListNode();
    dummyHead.next = head;

    // finding the node before the sublist
    let nodeBeforeSublist = dummyHead;
    let pos = 1;
    while (pos < start){
        nodeBeforeSublist = nodeBeforeSublist.next;
        pos++
    }

    let sublistWorkingNode = nodeBeforeSublist.next;
    while (start < end){
        let temp = sublistWorkingNode.next;
        sublistWorkingNode.next = temp.next;
        temp.next = sublistWorkingNode.next;
        sublistWorkingNode.next = temp;
        start++
    }

    return dummyHead.next;
};
