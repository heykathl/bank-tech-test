class Bank {
  constructor(statement) {
    this.balance = 0;
    this.transactions = [];
    this.statement = statement;
  }

  getBalance() {
    return Math.abs(this.balance);
  }

  deposit(value, date) {
    this.balance += value;
    this.transactions.push({
      type: "credit",
      date: date,
      amount: value.toFixed(2),
      balance: this.balance,
    });
  }

  withdraw(value, date) {
    this.balance -= value;
    this.transactions.push({
      type: "debit",
      date: date,
      amount: value.toFixed(2),
      balance: this.balance,
    });
  }

  getTransactions() {
    return this.transactions;
  }

  printStatement() {
    // console.log(this.transactions)
    return this.statement.generateStatement(this.transactions);
  }
}

module.exports = Bank;
