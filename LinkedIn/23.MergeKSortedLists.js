/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    //mergeTwo lists, i.e. 8 => 4 lists left, then 2 lists left; until only one left;
    // if 3 => merge two lists first and then merge rest to one list

    // null check:
    if(!lists || lists.length < 1) return null;

    // first part is the same as LeetCode question 21 to merge two sorted linked lists
   let mergeTwoLists = (l1, l2) => {
        let res = new ListNode();
        let curNode = res;
        while  (l1 && l2) {
            if (l1.val < l2.val) {
                curNode.next = l1;
                l1 = l1.next;
            } else {
                curNode.next = l2;
                l2 = l2.next;
            }
            curNode = curNode.next;
        }

        // even better code:
       curNode.next = l1 || l2;

       // one line replaces all below codes:
       // curNode.next = l1 !== null ? l1 : l2;

        // while (l1){
        //     curNode.next = l1;
        //     l1 = l1.next;
        //     curNode = curNode.next;
        // }
        // while (l2){
        //     curNode.next = l2;
        //     l2 = l2.next;
        //     curNode = curNode.next;
        // }
        return res.next
    };

    // second part is using loop to use first part to narrow down the lists from [0] to [length -1]
    let curLists = lists;
    // while the lists only has one item, the loop ends
    while(curLists.length > 1){
        let n = curLists.length, i = 0, j = n-1;
        let newLists = [];
        // while(i <= j) loop means the merge is from two sides to middle;
        // It has two situations: one is i !== j, so continue merge two sides lists to one
        // until one list left, which is i === j; then add to newLists
        while(i <= j ){
            if(i === j){
                newLists.push(curLists[i])
            } else {
                let newList = mergeTwoLists(curLists[i], curLists[j]);
                // at this step, newLists may have more then one list
                newLists.push(newList)
            }
            i++;
            j--;
        }
        // this step will continue above merge since newLists may have more than one list, then after merging all lists, only one merged list === curLists
        curLists = newLists
    }
    // then we need to return this curLists, but we need to return the node, not whole list,
    // so using curLists[0], although it only has one list inside
    return curLists[0]
};


// Even better method:
var merge = (l1, l2) => {
    let l = new ListNode(null);
    const prehead = l;

    while(l1 != null && l2 != null) {
        if(l1.val < l2.val) {
            l.next = l1;
            l1 = l1.next;
        } else {
            l.next = l2;
            l2 = l2.next;
        }

        l = l.next;
    }

    l.next = l1 || l2;

    return prehead.next;
}

var mergeKLists = function(lists) {
    if(lists.length === 0) return null;

    while(lists.length > 1) {
        const l1 = lists.shift(); // pop list from front of the array
        const l2 = lists.shift();

        lists.push(merge(l1, l2));
    }

    return lists[0];  // merging all lists to 1st list of the array
};
