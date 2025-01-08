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

// console.log(isPalindrome("racecar"))
// console.log(anotherWayPalindrome("racecarw"))

const toCapitalize = string => string.toLowerCase().split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ")

// console.log(toCapitalize("hello world"))

function reverseArray(arr) {
    let revArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        revArr.push(arr[i])
    }
    return revArr
}

console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]


function findMax(arr) {
    let max = 0
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    return max
}

console.log(findMax([3, 1, 4, 1, 5, 9])); // Output: 9

function rotateArray(arr, k) {
    // Your code here
}


console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]
function removeDuplicates(arr) {
    let duplicate = []
    for (let i = 0; i < arr.length; i++) {
        if (!duplicate.includes(arr[i])) {
            duplicate.push(arr[i])
        }
    }
    return duplicate
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]

function mergeSortedArrays(arr1, arr2) {
    let sortedArray = [];
    let i = 0,
        j = 0;

    for (let k = 0; k < arr1.length + arr2.length; k++) {
        if (i < arr1.length && (j >= arr2.length || arr1[i] < arr2[j])) {
            sortedArray.push(arr1[i]);
            i++;
        } else if (j < arr2.length) {
            sortedArray.push(arr2[j]);
            j++;
        }
    }

    return sortedArray;
}


console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]

function isPalindromeArr(arr) {
    let storedArray = []
    for (let i = arr.length - 1; i >= 0; i--) {
        storedArray.push(arr[i])
    }
    for (let i = 0; i < storedArray.length; i++) {
        if (storedArray[i] === arr[i]) {
            return true
        } else {
            return false
        }
    }
}

console.log(isPalindromeArr([1, 2, 3, 2, 1])); // Output: true
console.log(isPalindromeArr([1, 2, 3, 4, 5])); // Output: false
function findSecondLargest(arr) {
    let largest = 0
    let secondLargest = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest
            largest = arr[i]
        }
    }
    return secondLargest
        // Your code here
}

console.log(findSecondLargest([3, 5, 1, 8, 9, 2])); // Output: 5

function moveZeroes(arr) {
    let zero = []
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] !== 0) {
            zero.push(arr[index])
        }
    }

    for (let i = 0; i <= arr.length - zero.length; i++) {
        zero.push(0)
    }
    return zero
        // Your code here
}

console.log(moveZeroes([0, 1, 0, 3, 12])); // Output: [1, 3, 12, 0, 0]

function arrayIntersection(arr1, arr2) {
    let interSectedArr = []
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            interSectedArr.push(arr1[i])
        }
    }
    return interSectedArr
        // Your code here
}

console.log(arrayIntersection([1, 2, 3, 4], [3, 4, 2, 5, 6])); // Output: [3, 4]
function findMissingNumber(arr, n) {
    let expectedSum = 0;
    let actualSum = 0;

    for (let i = 1; i <= n; i++) {
        expectedSum += i;
    }

    for (let i = 0; i < arr.length; i++) {
        actualSum += arr[i];
    }

    return expectedSum - actualSum;
}

console.log(findMissingNumber([1, 2, 4, 5, 6], 6)); // Output: 3

function findPairs(arr, target) {
    let seen = new Set();
    let result = [];

    for (let num of arr) {
        let complement = target - num;
        if (seen.has(complement)) {
            result.push([complement, num]);
        }
        seen.add(num);
    }

    return result;
}

console.log(findPairs([1, 2, 3, 4, 3, 2, 1], 4)); // Output: [[1, 3], [2, 2]]


const maxProfits = (priceArray) => {
    let minPrice = priceArray[0]
    let maxProfit = 0
    for (let i = 0; i < priceArray.length; i++) {
        let currentPrice = priceArray[i]
        minPrice = Math.min(minPrice, currentPrice)
        let potentialProfit = currentPrice - minPrice
        maxProfit = Math.max(maxProfit, potentialProfit)
    }
    return maxProfit
}
console.log(maxProfits([7, 1, 2, 3, 5, 6]))


const arrayChunk = (arr, n) => {
    let chunkArr = []
    let index = 0

    while (index < arr.length) {
        const chunk = arr.slice(index, n + index)
        chunkArr.push(chunk)
        index += n
    }
    return chunkArr
}
console.log(arrayChunk([1, 2, 3, 4, 5], 3))
console.log(arrayChunk([1, 2, 3, 4, 5, 7, 8], 2))

console.clear()

const twoSum = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) return [i, j]
        }
    }
    return []
}
console.log(twoSum([2, 7, 9, 11], 20))