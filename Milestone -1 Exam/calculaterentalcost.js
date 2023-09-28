function calculateBillPerPerson(dishCosts, numberOfPeople) {
    // Calculate the total bill by summing up the costs of all dishes
    const totalBill = dishCosts.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  
    // Calculate the bill to be paid by each person
    const billPerPerson = totalBill / numberOfPeople;
  
    // Create and return an object with the total bill and bill per person
    const result = {
      totalBill: totalBill,
      billPerPerson: billPerPerson
    };
  
    return result;
  }
  
  // Example usage:
  const dishCosts = [25, 35, 20, 15]; // Replace this with the cost of each dish
  const numberOfPeople = 4; // Replace this with the number of people sharing the bill
  const billInfo = calculateBillPerPerson(dishCosts, numberOfPeople);
  console.log(billInfo);
  