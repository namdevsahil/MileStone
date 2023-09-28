const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
  // Calculate the percentage discount
  const discount = originalPrice - discountedPrice;
  const discountPercentage = (discount / originalPrice) * 100;

  // Round the discount percentage to two decimal places
  const roundedDiscountPercentage = Math.round(discountPercentage * 100) / 100;

  return roundedDiscountPercentage;
};

// Example usage:
const originalPrice = 100; // Replace this with the original price of the product
const discountedPrice = 75; // Replace this with the discounted price of the product

const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
console.log(`You can save ${discountPercentage}% on this product.`);
