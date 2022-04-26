class Statement {
  constructor() {
    this.statement = [];
    this.header = "date || credit || debit || balance";
  }

  generateStatement(transactions) {
    transactions.forEach((transaction) => {
      this.statement.push(transaction["date"]);
      this.creditChecker(transaction);
      this.debitChecker(transaction);
      this.statement.push(transaction["balance"].toFixed(2));
    });
    const splitStatement = this.splitTransactions(this.statement, 4);
    const formattedStatement = splitStatement
      .join("\n")
      .split(",")
      .join(" || ");
    // console.log(formattedStatement)
    // console.log(`${this.header}\n${formattedStatement}`)
    return `${this.header}\n${formattedStatement}`;
  }
  splitTransactions(arr, len) {
    let split = [],
      i = 0,
      n = arr.length;
    while (i < n) {
      split.push(arr.slice(i, (i += len)));
    }
    return split;
  }

  creditChecker(transaction) {
    if (transaction["type"] === "credit") {
      this.statement.push(transaction["amount"]);
    } else {
      this.statement.push("");
    }
  }

  debitChecker(transaction) {
    if (transaction["type"] === "debit") {
      this.statement.push(transaction["amount"]);
    } else {
      this.statement.push("");
    }
  }
}

module.exports = Statement;
