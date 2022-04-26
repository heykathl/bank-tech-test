class Bank {
  constructor(statement) {
    this.balance = 0;
    this.transactions = [];
    this.statement = statement;
  }

  getBalance() {
    return Math.abs(this.balance);
  }

  deposit(value) {
    this.balance += value;
    this.transactions.push({
      type: "credit",
      date: this.todaysDate(),
      amount: value.toFixed(2),
      balance: this.balance,
    });
  }

  withdraw(value) {
    this.balance -= value;
    this.transactions.push({
      type: "debit",
      date: this.todaysDate(),
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

  todaysDate(){
    let today = new Date(Date.now());
    // console.log(today)
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    
    return today = dd + '/' + mm + '/' + yyyy;
  }

}
module.exports = Bank;
