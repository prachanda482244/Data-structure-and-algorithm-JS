class Node {
    constructor(value, next = null) {
        this.head = value;
        this.next = next
    }

}
class LinkedList {
    constructor(value) {
        this.head = new Node(value)
        this.tail = this.head
        this.length = 1
    }
    push(value) {
        let newNode = new Node(value)
        if (!this.head) {
            this.tail = newNode;
            this.head = newNode
        }
        this.tail.next = newNode;
        this.tail = newNode
        this.length++
    }
}

const linkedlist = new LinkedList(2)
linkedlist.push(3)
linkedlist.push(30)
linkedlist.push(300)
console.log(linkedlist)