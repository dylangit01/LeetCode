class CrazyQueue {
    constructor() {
        this.first = [];
        this.last = []
    }
    enqueue(value){
        // below codes when dequeue one item, then have to push into last array, and then push new item, so that if we need to pop out, it has right order to be popped out
        let length = this.first.length;
        for(let i = 0; i < length; i ++){
            this.last.push(this.first.pop())
        }
        this.last.push(value);
        return this
    }

    dequeue(){
        let length = this.last.length;
        for(let i = 0; i < length; i ++){
            this.first.push(this.last.pop())
        }
        this.first.pop();
        return this
    }

    peek(){
        if(this.last.length > 0 ){
            return this.last[0]
        }
        return this.first[this.first.length-1]
    }

    size(){
        if(this.last.length > 0) return this.last.length;
        else return this.first.length
    }

    isEmpty(){
        if(this.last.length || this.first.length) return false;
        else if(this.last.length === 0 && this.first.length === 0) return true
    }
}

let myQ = new CrazyQueue();
myQ.enqueue(1);
myQ.enqueue(2);
myQ.enqueue(3);
myQ.enqueue(4);
myQ.enqueue(5);
myQ.enqueue(6);
myQ.peek();
myQ.dequeue();
myQ.enqueue(7);
myQ.dequeue();
myQ.peek();
myQ.size()

/* For this question, what is the time and space complexity?
    Well, the operation worse case is O(n), but the algorithm worst case is O(1), because the "Amortized Analysis" meaning => how often that operation happen?, so the way of binding the time is
    very expect case is that O(1), and space is O(n)

 */
