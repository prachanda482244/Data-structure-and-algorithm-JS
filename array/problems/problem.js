const reverseString = (string) => {
    let array = string.split("")
    let reversedAr = []
    for (let i = array.length; i >= 0; i--) {
        reversedAr.push(array[i])
    }
    console.log(reversedAr.join(""))
}

// reverseString("hello")

const reverseStringUsingBuiltIn = str => str.split("").reverse().join("")

// console.log(reverseStringUsingBuiltIn("hello"))

const isPalindrome = str => {
    let storeString = str.split("")
    let array = []
    for (let i = storeString.length; i >= 0; i--) {
        array.push(storeString[i])
    }
    if (str === array.join("")) {
        console.log("Its palindrome")
    } else {
        console.log("not a palindrome")
    }
}

const anotherWayPalindrome = str => str === str.split("").reverse().join("") ? "Its palindrome" : "Not palindrome"

console.log(isPalindrome("racecar"))
console.log(anotherWayPalindrome("racecarw"))