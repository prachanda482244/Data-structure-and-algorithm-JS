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

const uniqueShops = new Set(products.map(product => product.shopId))

console.log(uniqueShops)

const orderByCustomer = new Map()
orders.forEach(order => {
    const customerId = order.customerId
    if (!orderByCustomer.has(customerId)) {
        orderByCustomer.set(customerId, [])
    }
    orderByCustomer.get(customerId).push(order)
})
console.log(orderByCustomer)

const groupByPrice = new Map()
products.forEach(product => {
    const range = product.price > 500 ? "expensive" : "cheap"
    if (!groupByPrice.has(range)) {
        groupByPrice.set(range, [])
    }
    groupByPrice.get(range).push(product)
})
console.log(groupByPrice.get("expensive"))

// const productMap = new Map(products.map(product => [product.id, product]));
// const customerMap = new Map(customers.map(customer => [customer.id, customer]));

// const enrichedOrders = orders.map(order => ({
//     ...order,
//     product: productMap.get(order.productId),
//     customer: customerMap.get(order.customerId),
// }));

// console.log(enrichedOrders);