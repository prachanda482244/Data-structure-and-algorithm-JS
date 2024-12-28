class MyArray {
    constructor() {
        this.data = {}
        this.length = 0
    }
    push(item) {
        this.data[this.length] = item
        this.length++
            return this.length
    }
    pop() {
        const lastItem = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--
            return lastItem

    }
    unshift(item) {
        for (let i = this.length; i > 0; i--) {
            this.data[i] = this.data[i - 1]
        }
        this.data[0] = item
        this.length++
    }
    shift() {
        for (let i = 0; i < this.length; i++) {
            this.data[i] = this.data[i + 1]
        }
        // remove the last index as it is undefined
        delete this.data[this.length - 1]
        this.length--
    }
    get(index) {
        console.log(this.data[index])
    }
    deleteByIndex(index) {
        // if the index is 3 and the lenght is 3 then it wont loop though but simply remove last element
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1]
        this.length--
    }
}

const myArr = new MyArray()
myArr.push(50)
myArr.push(5)
myArr.push("hello")
    // myArr.unshift("world")
    // myArr.shift()
    // myArr.pop()
console.log(myArr)
myArr.deleteByIndex(2)
    // myArr.unshift("new")
console.log(myArr)