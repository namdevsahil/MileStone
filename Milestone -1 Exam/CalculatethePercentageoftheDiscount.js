const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
  if (originalPrice <= 0 || discountedPrice <= 0) {
    throw new Error("Prices must be greater than zero.");
  }

  // Calculate the percentage discount
  const discount = originalPrice - discountedPrice;
  const discountPercentage = (discount / originalPrice) * 100;

  // Round the discount percentage to two decimal places
  const roundedDiscountPercentage = Math.round(discountPercentage * 100) / 100;

  return roundedDiscountPercentage;
};

// Example usage:
const originalPrice = 100; // Original price of the product
const discountedPrice = 70; // Discounted price of the product

const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
console.log(`Discount Percentage: ${discountPercentage}%`);
