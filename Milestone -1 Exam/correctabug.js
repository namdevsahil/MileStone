function doubleCartQuantities(cart) {
    // Create a new array to store the corrected quantities
    const correctedCart = [];
  
    // Iterate through the original cart array
    for (let i = 0; i < cart.length; i++) {
      // Double the quantity of each item and push it to the correctedCart array
      correctedCart.push(cart[i] * 2);
    }
  
    // Return the correctedCart array with doubled quantities
    return correctedCart;
  }
  
  // Example usage:
  const initialCart = [1, 2, 3, 4]; // Replace this with your cart array
  const correctedCart = doubleCartQuantities(initialCart);
  console.log(correctedCart); // This will print [2, 4, 6, 8] if the function works correctly
  