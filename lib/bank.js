class Bank {

  constructor() {
    this.balance = 0;
    this.transactions = [];
  };

  getBalance() {
    return this.balance;
  };

  deposit(value, date) {
    this.balance += value;
    this.transactions.push({
      type: "credit", 
      date: date,
      amount: value});
  };

  withdraw(value, date) {
    this.balance -= value;
    this.transactions.push({
      type: "debit",
      date: date,
      amount: value});
  };

  getTransactions() {
    return this.transactions;
  };

  
}
// ["date || credit || debit || balance"]
module.exports = Bank;