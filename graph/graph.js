const products = [{
        id: "gid://Product/101",
        name: "iPhone 14 Pro",
        brand: "Apple",
        category: "Electronics",
        price: 1199,
        shopId: "gid://Shop/201",
    },
    {
        id: "gid://Product/102",
        name: "AirPods Pro",
        brand: "Apple",
        category: "Accessories",
        price: 249,
        shopId: "gid://Shop/201",
    },
    {
        id: "gid://Product/103",
        name: "Samsung Galaxy S23",
        brand: "Samsung",
        category: "Electronics",
        price: 999,
        shopId: "gid://Shop/202",
    },
    {
        id: "gid://Product/104",
        name: "Sony WH-1000XM5",
        brand: "Sony",
        category: "Accessories",
        price: 399,
        shopId: "gid://Shop/203",
    },
    {
        id: "gid://Product/105",
        name: "MacBook Pro",
        brand: "Apple",
        category: "Computers",
        price: 2499,
        shopId: "gid://Shop/201",
    }
];

const orders = [{
        id: "gid://Order/501",
        productId: "gid://Product/101",
        customerId: "gid://Customer/301",
        quantity: 1,
        totalAmount: 1199,
        purchaseDate: "2024-12-01",
        shopId: "gid://Shop/201",
    },
    {
        id: "gid://Order/502",
        productId: "gid://Product/105",
        customerId: "gid://Customer/302",
        quantity: 1,
        totalAmount: 2499,
        purchaseDate: "2024-12-02",
        shopId: "gid://Shop/201",
    },
    {
        id: "gid://Order/503",
        productId: "gid://Product/102",
        customerId: "gid://Customer/301",
        quantity: 2,
        totalAmount: 498,
        purchaseDate: "2024-12-03",
        shopId: "gid://Shop/201",
    },
    {
        id: "gid://Order/504",
        productId: "gid://Product/103",
        customerId: "gid://Customer/303",
        quantity: 1,
        totalAmount: 999,
        purchaseDate: "2024-12-04",
        shopId: "gid://Shop/202",
    },
    {
        id: "gid://Order/505",
        productId: "gid://Product/104",
        customerId: "gid://Customer/304",
        quantity: 1,
        totalAmount: 399,
        purchaseDate: "2024-12-05",
        shopId: "gid://Shop/203",
    }
];

const customers = [{
        id: "gid://Customer/301",
        name: "Ramesh Shrestha",
        email: "ramesh@example.com",
        location: "Kathmandu",
    },
    {
        id: "gid://Customer/302",
        name: "Sita Singh",
        email: "sita@example.com",
        location: "Lalitpur",
    },
    {
        id: "gid://Customer/303",
        name: "Hari Gurung",
        email: "hari@example.com",
        location: "Bhaktapur",
    },
    {
        id: "gid://Customer/304",
        name: "Anita Rai",
        email: "anita@example.com",
        location: "Pokhara",
    }
];
class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addNode(node) {
        if (!this.adjacencyList.has(node)) {
            this.adjacencyList.set(node, []);
        }
    }

    addEdge(source, target) {
        if (this.adjacencyList.has(source)) {
            this.adjacencyList.get(source).push(target);
        }
    }

    getConnections(node) {
        return this.adjacencyList.get(node) || [];
    }

    printGraph() {
        for (let [node, edges] of this.adjacencyList) {
            console.log(`${node} -> ${edges.join(", ")}`);
        }
    }
}

// Create the graph
const graph = new Graph();

// Add nodes
products.forEach(product => graph.addNode(product.id));
customers.forEach(customer => graph.addNode(customer.id));
orders.forEach(order => graph.addNode(order.id));
products.forEach(product => graph.addNode(product.shopId));

// Add edges
orders.forEach(order => {
    graph.addEdge(order.customerId, order.id); // Customer → Order
    graph.addEdge(order.id, order.productId); // Order → Product
    const product = products.find(p => p.id === order.productId);
    if (product) {
        graph.addEdge(product.shopId, product.id); // Shop → Product
    }
});

// Print the graph
graph.printGraph();

const findProductsPurchasedByCustomer = (customerId) => {
    const orders = graph.getConnections(customerId);
    return orders.flatMap(orderId => graph.getConnections(orderId));
};
console.log(findProductsPurchasedByCustomer("gid://Customer/301"));

// const findCustomersForShop = (shopId) => {
//     const products = graph.getConnections(shopId);
//     const orders = products.flatMap(productId => [...graph.adjacencyList.entries()]
//         .filter(([orderId, targets]) => targets.includes(productId))
//         .map(([orderId]) => orderId)
//     );
//     return orders.map(orderId => [...graph.adjacencyList.entries()].find(([customerId, targets]) => targets.includes(orderId))[0]);
// };

// console.log(findCustomersForShop("gid://Shop/201"));