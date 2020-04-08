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
        while (l1){
            curNode.next = l1;
            l1 = l1.next;
            curNode = curNode.next;
        }
        while (l2){
            curNode.next = l2;
            l2 = l2.next;
            curNode = curNode.next;
        }
        return res.next
    };

    let curLists = lists;
    while(curLists.length > 1){
        let n = curLists.length, i = 0, j = n-1;
        let newLists = [];
        while(i <=j ){
            if(i === j){
                newLists.push(curLists[i])
            } else {
                let newList = mergeTwoLists(curLists[i], curLists[j])
                newLists.push(newList)
            }
            i++;
            j--;
        }
        curLists = newLists
    }
    return curLists[0]
};
