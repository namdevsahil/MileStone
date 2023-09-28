const calculateTotalCost = (cart) => {
  // Initialize a variable to keep track of the total cost
  let totalCost = 0;

  // Iterate through each item in the cart array
  cart.forEach((item) => {
    // Calculate the cost of the current item (unit price * quantity) and add it to the total cost
    totalCost += item.unitPrice * item.quantity;
  });

  // Return the total cost
  return totalCost;
};

// Example usage:
const cart = [
  { unitPrice: 10, quantity: 2 },  // Item 1: Unit Price: 10, Quantity: 2
  { unitPrice: 5, quantity: 3 },   // Item 2: Unit Price: 5, Quantity: 3
  { unitPrice: 15, quantity: 1 }   // Item 3: Unit Price: 15, Quantity: 1
];

const totalCost = calculateTotalCost(cart);
console.log(`Total cost of items in the cart: $${totalCost}`);
