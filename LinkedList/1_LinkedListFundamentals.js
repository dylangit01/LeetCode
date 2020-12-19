class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    // this length is the size
    this.length = 1;
    return this
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next
    }
    return array
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this
  }

  prePend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this
  }

  traverseToIndex(index) {
    let counter = 0;
    let curNode = this.head;
    while (counter < index) {
      curNode = curNode.next;
      counter++
    }
    return curNode
  }

  get(index) {
    if (!this.head) return -1;

    this.traverseToIndex(index)
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value)
    }

    const newNode = new Node(value);
    const leaderNode = this.traverseToIndex(index - 1);
    const holdingPointer = leaderNode.next;
    leaderNode.next = newNode;
    newNode.next = holdingPointer;
    this.length++;   // don't forget this one

    return this
  }

  remove(index) {
    if (index >= this.length) {
      return 'index doesnot exist'
    } else if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return this
    }
    const leaderNode = this.traverseToIndex(index - 1);
    const unwantedNode = leaderNode.next;
    leaderNode.next = unwantedNode.next;
    this.length--;
    return this
  }

  reverse() {
    if (!this.head.next) {        // only one node exists, carry this method
      return this
    }
    let first = this.head;     // 10...
    this.tail = this.head;     // since after while loop, this.head will become this.tail
    let second = first.next;       // 5...
    while (second) {    // Actually, this while loop only change two items each loop,
      const temp = second.next;  // 28...

      second.next = first;       // Here we should understand in linked list, it means secObj.next has a link to firstObj, meaning we change the pointer as 5.next--> 10...
      first = second;             // then we let 5 becomes head
      second = temp             // and let 28 becomes secObj === head.next
    }

    // this.head will be the last item since all pointer change direction, so the head will be the last item, it's next will be null
    this.head.next = null;
    // after this loop, this.head will be the first item, which will be "37", and the second item will be null, then the loop ends
    this.head = first;
    return this
  }

  reverseBTBVsion() {
    if (!this.head.next) return this;

    let pre = null;
    let cur = this.head;
    let tmp = null;
    while (cur) {
      tmp = cur.next;
      cur.next = pre;
      pre = cur;
      cur = tmp
    }
    this.head.next = null;   // as after the while loop, the head becomes the last node, so the last.next = null
    this.head = pre;        // and we need to update the head to pre, then return the pre
    return pre
  }
}




