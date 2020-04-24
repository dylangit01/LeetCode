/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const addTwoNumbers = (l1, l2) => {
    // when below codes using new class, it has to be created first
    const dummyHead = new ListNode(0);
    let newListBuildNode = dummyHead;

    let carry = 0;
    while (l1 || l2) {
        const first = l1 !== null ? l1.val : 0;
        const second = l2 !== null ? l2.val : 0;

        let sum = first + second + carry;
        carry = Math.floor(sum / 10);

        newListBuildNode.next = new ListNode(sum % 10);

        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;

        newListBuildNode = newListBuildNode.next;
    }
    if (carry > 0) {
        newListBuildNode.next = new ListNode(carry)
    }

    return dummyHead.next;
};
