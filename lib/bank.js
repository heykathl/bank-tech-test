class Bank {

  constructor() {
    this.balance = 0;
  };

  getBalance() {
    return this.balance;
  };

  deposit(value) {
    this.balance += value;
  };

  withdraw(value) {
    this.balance -= value;
  }
}

module.exports = Bank;