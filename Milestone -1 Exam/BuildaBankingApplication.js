// Create an initial customer object with a name and balance
const customer = {
  name: "John Doe",
  balance: 1000,
};

// Function to deposit money into the customer's account
function deposit(amount) {
  if (amount > 0) {
    this.balance += amount;
    console.log(`Deposited $${amount}. New balance: $${this.balance}`);
  } else {
    console.log("Invalid deposit amount.");
  }
}

// Function to withdraw money from the customer's account
function withdraw(amount) {
  if (amount > 0 && amount <= this.balance) {
    this.balance -= amount;
    console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
  } else {
    console.log("Invalid withdrawal amount or insufficient funds.");
  }
}

// Attach the deposit and withdraw functions to the customer object as methods
customer.deposit = deposit;
customer.withdraw = withdraw;

// Example usage:
console.log(`Customer: ${customer.name}`);
console.log(`Initial balance: $${customer.balance}`);
customer.deposit(500); // Deposit $500
customer.withdraw(200); // Withdraw $200
customer.withdraw(1500); // Attempt to withdraw $1500 (insufficient funds)
