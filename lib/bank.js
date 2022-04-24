class Bank {

  constructor() {
    this.balance = 0;
    this.transactions = [];
  };

  getBalance() {
    return this.balance;
  };

  deposit(value) {
    this.balance += value;
    this.transactions.push({amount: value});
  };

  withdraw(value) {
    this.balance -= value;
    this.transactions.push({amount: value});
  };

  getTransactions() {
    return this.transactions;
  };

  
}
// ["date || credit || debit || balance"]
module.exports = Bank;