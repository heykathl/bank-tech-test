class Bank {
  constructor(statement) {
    this.balance = 0;
    this.transactions = [];
    this.statement = statement;
  }

  getBalance() {
    return this.balance;
  }

  getTransactions() {
    return this.transactions;
  }

  deposit(value) {
    this.balance += value;
    this.storeCreditTransaction(value);
    // console.log(this.transactions)
  }

  withdraw(value) {
    this.balance -= value;
    this.storeDebitTransaction(value);
  }

  storeCreditTransaction(transaction) {
    this.transactions.push({
      date: this.formatDate(),
      credit: transaction.toFixed(2),
      debit: "",
      balance: this.balance,
    });
  }

  storeDebitTransaction(transaction) {
    this.transactions.push({
      date: this.formatDate(),
      credit: "",
      debit: transaction.toFixed(2),
      balance: this.balance,
    });
    // console.log(this.transactions)
  }

  printStatement() {
    // console.log(this.transactions)
    return this.statement.generateStatement(this.transactions);
  }

  formatDate() {
    let today = new Date(Date.now());
    // console.log(today)
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();

    return (today = dd + "/" + mm + "/" + yyyy);
  }
}
module.exports = Bank;
