class Statement {

  constructor() {
    this.statement = []
    this.header = "date || credit || debit || balance";
  }

  generateStatement(transactions) {
    transactions.forEach((transaction) => {
        this.statement.push(transaction['date']);

        if(transaction['type'] === 'credit'){
          this.statement.push(transaction['amount'])
        } else {
          this.statement.push("")
        };

        if(transaction['type'] === "debit"){
          this.statement.push(transaction['amount'])
        } else {
          this.statement.push("")
        };

        this.statement.push(transaction['balance']);
    });
    const splitStatement = this.splitTransactions(this.statement, 4);
    const formattedStatement = splitStatement.join("\n").split(",").join(" || ")
    // console.log(formattedStatement)
    return `${this.header}\n${formattedStatement}`

  };
  splitTransactions(arr, len) {
    let split = [], i = 0, n = arr.length;
    while (i < n) {
      split.push(arr.slice(i, i += len));
    }
    return split;
  }

};

module.exports = Statement;