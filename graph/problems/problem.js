const products = ["Laptop", "Mouse", "Monitor", "Keyboard"];
const adjacencyMatrix = [
    // A   B   C   D
    [0, 1, 1, 0], // A: Laptop related to Mouse (B) and Keyboard (C)
    [1, 0, 0, 1], // B: Mouse related to Laptop (A) and Monitor (D)
    [1, 0, 0, 1], // C: Keyboard related to Laptop (A) and Monitor (D)
    [0, 1, 1, 0] // D: Monitor related to Mouse (B) and Keyboard (C)
];

console.log(adjacencyMatrix)

const getRecommendedProduct = (product) => {
    const index = product.indexOf(product)
    if (index === -1) return "No product"
    return products.map((p, i) => adjacencyMatrix[index][i] === 1 ? p : null).filter(Boolean)
}
console.log(getRecommendedProduct("Keyboard"))