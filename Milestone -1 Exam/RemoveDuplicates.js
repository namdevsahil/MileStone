function removeDuplicatesFromCart(cart) {
    const uniqueItemIds = new Set();

    const newCart = [];
    for (const item of cart) {
        if (!uniqueItemIds.has(item.id)) {
            newCart.push(item);
            uniqueItemIds.add(item.id);
        }
    }

    return newCart;
}

const customerCart = [
    { id: 1, name: "Product A", price: 20.99 },
    { id: 2, name: "Product B", price: 15.49 },
    { id: 1, name: "Product A", price: 20.99 }, // Duplicate
    { id: 3, name: "Product C", price: 9.99 },
    { id: 2, name: "Product B", price: 15.49 }, // Duplicate
];

// Remove duplicates from the cart
const newCart = removeDuplicatesFromCart(customerCart);

// Display the new cart without duplicates
console.log("New Cart Contents:");
newCart.forEach(item => {
    console.log(`${item.name} - Price: ${item.price}`);
});
