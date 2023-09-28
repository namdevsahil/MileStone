function calculateBillPerPerson(costs, numPeople) {
  // Calculate the total bill by summing up the costs of all dishes
  const totalBill = costs.reduce((acc, cost) => acc + cost, 0);

  // Calculate the bill per person by dividing the total bill by the number of people
  const billPerPerson = totalBill / numPeople;

  // Create an object to store the results
  const result = {
    totalBill: totalBill,
    billPerPerson: billPerPerson,
  };

  return result;
}

// Example usage:
const dishCosts = [20, 15, 10]; // Costs of each dish
const numberOfPeople = 5; // Number of people sharing the bill

const billDetails = calculateBillPerPerson(dishCosts, numberOfPeople);
console.log(billDetails);
