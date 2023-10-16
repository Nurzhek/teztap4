const groceries = [
    {
        name: "Magnum Daily",
        products: [
            {type: "fruit", name: "apple", price: 0.5},
            {type: "vegetable", name: "carrot", price: 0.3},
            // ... other products
        ]
    },
    {
        name: "Весна",
        products: [
            {type: "fruit", name: "apple", price: 0.7},
            {type: "vegetable", name: "carrot", price: 0.5},
            // ... other products
        ]
    },
    {
        name: "DN",
        products: [
            {type: "fruit", name: "apple", price: 0.9},
            {type: "vegetable", name: "carrot", price: 0.7},
            // ... other products
        ]
    },
    // ... other groceries
];


function findCheapestGroceryForProduct(productName) {
    let cheapestPrice = Infinity; // Start with a high number to ensure any price will be lower
    let cheapestGrocery = null;

    for (const grocery of groceries) {
        for (const product of grocery.products) {
            if (product.name === productName && product.price < cheapestPrice) {
                cheapestPrice = product.price;
                cheapestGrocery = grocery;
            }
        }
    }

    return cheapestGrocery ? 
        The cheapest ${productName} is available at ${cheapestGrocery.name} for ${cheapestPrice} :
        No grocery store contains ${productName}.;
}


