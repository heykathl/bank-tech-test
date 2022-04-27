class Statement {
  constructor() {
    this.header = "date || credit || debit || balance";
  }

  generateStatement(transactions) {
    // console.log(transactions)
    const results = [];
    for(let i = 0; i < transactions.length; i++){
        results.push(`\n${transactions[i].date} || ${transactions[i].credit} || ${transactions[i].debit} || ${transactions[i].balance.toFixed(2)}`).sort
    }
    return this.header + results.reverse().join('')
  }
}

module.exports = Statement;
