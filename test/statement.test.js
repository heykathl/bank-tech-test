/* eslint-disable no-undef */
const Statement = require("../lib/statement");

describe("Statement", () => {
  it("prints the statement of all transactions with the most recent one at the top", () => {
    const statement = new Statement()
    const transactions = [
      // { type: "credit", date: "2022-05-14T11:01:58.135Z", credit: "10.00", debit: "", balance: 10.0 },
      // { type: "debit", date: "2022-05-14T11:01:58.135Z", credit: "", debit: "5.00", balance: 5.0 },
      { date: "14/05/2022", credit: "10.00", debit: "", balance: 10.0 },
      { date: "14/05/2022", credit: "", debit: "5.00", balance: 5.0 }
    ];
    expect(statement.generateStatement(transactions)).toBe(
      "date || credit || debit || balance\n14/05/2022 ||  || 5.00 || 5.00\n14/05/2022 || 10.00 ||  || 10.00"
      );
  });
});
