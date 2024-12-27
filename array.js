const storedUser = ["ramesh", "suresh", "raju", "akhil"]
const storedUser2 = ["ss", "sdfsdf", "raju", "akhila"]

// helper function
const findUser = (array, user) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === user) {
            return `${user} found on index ${i}`
        }
    }
}



// console.log(findUser(storedUser, "akhil"))


const rows = 5;
const cols = 5;

for (let i = 1; i <= rows; i++) {
    let row = "";
    for (let j = 1; j <= cols; j++) {
        row += (i * j) + "\t"; // Multiplication table values
    }
    console.log(row);
}