// For this question, if in LeetCode, we have to use linked list(node) data structure to write codes:

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

var mergeTwoLists = (l1, l2) => {
    if(!l1 && !l2) return null;

    // create dummy head node:
    let newNode = new ListNode();
    let curNode = newNode;

    // first consider if both lists' length is same, then compare them one by one, and put into curNode.next
    while(l1 && l2){
        if(l1.val < l2.val){
            curNode.next = l1;
            // let this loop continue run until l1.next = null, while loop ends
            l1 = l1.next;
        } else {
            // same as above
            curNode.next = l2;
            l2 = l2.next;
        }
        // we also need to let curNode = curNode.next for each loop to store new list node
        curNode = curNode.next;
    }
    // Next need to consider if two lists are not same length:
    // (one line replaces all below codes from line 47- 58)
    curNode.next = l1 !== null ? l1 : l2;

    // below is to consider if both length are not same, say l1 is longer than l2
    // while(l1){
    //     curNode.next = l1;
    //     l1 = l1.next;
    //     curNode = curNode.next;
    // }
    //
    // while(l2){
    //     curNode.next = l2;
    //     l2 = l2.next;
    //     curNode = curNode.next;
    // }

    // we need to return the newNode.next since we put all listNodes into this newNode one by one
    return newNode.next
};




// Another solution is based on two arrays, not using linked lists structure:
mergeSortedArrays = (array1, array2) => {
    if (array1.length === 0) {
        return array2;
    }
    if (array2.length === 0) {
        return array1;
    }

    // this function has to compare items from their own loops, so for loop is not feasible;
    // In case of compare two loop items, using while loop
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;

    while (array1Item || array2Item) {
        // undefined meaning if array1 is longer than array2, in this case, we have to set this condition that
        // array2Item === undefined
        if (array2Item === undefined || array1Item < array2Item) {
            mergedArray.push(array1Item);
            array1Item = array1[i];
            i++;
        } else {
            mergedArray.push(array2Item);
            array2Item = array2[j];
            j++;
        }
    }
    return mergedArray;
};

// Practice for method one:
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const mergeTwoListsPrac = (l1, l2) => {
    if(!l2 && !l2) return null;

    let newNode = new Node();
    let currNode = newNode;

    while (l1 && l2){
        if(l1.val < l2.val){
            currNode.next = l1;
            l1 = l1.next;
        } else {
            currNode.next = l2;
            l2 = l2.next;
        }
        currNode = currNode.next;
    }
    currNode.next = l1 !== null? l1 : l2;

    return newNode.next
};






mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]);
