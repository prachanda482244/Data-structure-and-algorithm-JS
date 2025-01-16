class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
        // Allow method chaining
    }

    pop() {
        if (!this.head) return null; // Empty list check

        if (this.length === 1) { // Single node case
            const poppedNode = this.head;
            this.head = this.tail = null;
            this.length--;
            return poppedNode;
        }

        let current = this.head;
        let previous = null;

        while (current.next) {
            previous = current;
            current = current.next;
        }

        previous.next = null;
        this.tail = previous;
        this.length--;

        return current; // Return the removed node
    }

    unshift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift() {
        if (!this.head) return null;

        const removedNode = this.head;
        this.head = this.head.next;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }

        return removedNode;
    }

    getFirst() {
        return this.head || null;
    }

    getLast() {
        return this.tail || null;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;

        let current = this.head;
        let counter = 0;

        while (counter < index) {
            current = current.next;
            counter++;
        }

        return current;
    }

    set(index, value) {
        let temp = this.get(index)
        if (temp) {
            temp.value = value
            return true
        }
        return false
    }

    printList() {
        const values = [];
        let current = this.head;
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        return values;
    }
}

// Example usage
const linkedList = new LinkedList(2);
linkedList.push(3).push(30); // Method chaining
console.log("List after push:", linkedList.printList());
console.log("Last Node:", linkedList.getLast().value);
linkedList.pop();
console.log("List after pop:", linkedList.printList());
linkedList.unshift(1);
console.log("List after unshift:", linkedList.printList());
linkedList.shift();
console.log("List after shift:", linkedList.printList());
linkedList.get(1)
console.log("Get specific index :", linkedList.get(1));