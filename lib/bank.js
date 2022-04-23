class Bank {

  constructor() {
    this.balance = 0;
    this.transactions = [[""]];
  };

  getBalance() {
    return this.balance;
  };

  deposit(value, date) {
    this.balance += value;
    this.transactions.push([date, value]);
  };

  withdraw(value) {
    this.balance -= value;
  };

  getTransaction() {
    return this.transactions;
  };

  
}

module.exports = Bank;