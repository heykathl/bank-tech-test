/* eslint-disable no-undef */
const Statement = require("../lib/statement");

describe("Statement", () => {
  it("prints the statement of all transactions", () => {
    const statement = new Statement();
    const transactions = [
      { type: "credit", date: "14/01/2023", amount: "10.00", balance: 10.0 },
      { type: "debit", date: "15/01/2023", amount: "5.00", balance: 5.0 },
    ];
    expect(statement.generateStatement(transactions)).toBe(
      "date || credit || debit || balance\n14/01/2023 || 10.00 ||  || 10.00\n15/01/2023 ||  || 5.00 || 5.00"
    );
  });
});
