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
    pop() {
        if (!this.head) {
            return
        }
        this.temp = this.head
        this.prev = this.head
        while (this.temp.next) {
            this.prev = this.temp
            this.temp = this.prev.next
        }
        this.tail = this.prev;
        this.tail.next = null
        this.length--

        if (this.length === 0) {
            this.head = null;
            this.tail = null
        }
        return this.temp
    }
    unshift(value) {
        let newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        }
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }
    shift() {
        if (!this.head) {
            return null
        }
        let temp = this.head
        this.head = this.head.next
        this.length--
        if (this.length === 0) {
            this.tail = null
        }
        return temp
    }
}

const linkedlist = new LinkedList(2)

linkedlist.push(3)
linkedlist.push(30)
console.log(linkedlist)
// linkedlist.push(300)
// linkedlist.pop()
// linkedlist.pop()
// linkedlist.pop()
// linkedlist.unshift(20)
linkedlist.shift()
console.log(linkedlist)