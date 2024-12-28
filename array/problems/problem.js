const reverseString = (string) => {
    let array = string.split("")
    let reversedAr = []
    for (let i = array.length; i >= 0; i--) {
        reversedAr.push(array[i])
    }
    console.log(reversedAr.join(""))
}

reverseString("hello")

const reverseStringUsingBuiltIn = str => str.split("").reverse().join("")

console.log(reverseStringUsingBuiltIn("hello"))