/* eslint-disable no-undef */
const Bank = require("../lib/bank");
const Statement = require("../lib/statement");

describe("Bank", () => {
  let bank;
  let statement;

  beforeEach(() => {
    statement = new Statement();
    bank = new Bank(statement);
    jest
      .spyOn(global.Date, "now")
      .mockImplementation(() => new Date("2022-05-14T11:01:58.135Z").valueOf());
  });

  it("can deposit money into the bank account and balance is updated", () => {
    bank.deposit(10.5);
    expect(bank.getBalance()).toBe(10.5);
  });

  it("can withdraw money from the bank account and balance is updated", () => {
    bank.deposit(10.5);
    bank.withdraw(5.0);
    expect(bank.getBalance()).toBe(5.5);
  });

  it("stores each of the transaction that was made", () => {
    bank.deposit(10.5);
    bank.withdraw(5.5);
    bank.withdraw(2.0);
    expect(bank.getTransactions()).toEqual([
      // { type: "credit", date: new Date("2022-05-14T11:01:58.135Z"), amount: "10.50", balance: 10.5 },
      // { type: "debit", date: new Date("2022-05-14T11:01:58.135Z"), amount: "5.50", balance: 5.0 },
      // { type: "debit", date: new Date("2022-05-14T11:01:58.135Z"), amount: "2.00", balance: 3.0 },
      { date: "14/05/2022", credit: "10.50", debit: "", balance: 10.5 },
      { date: "14/05/2022", credit: "", debit: "5.50", balance: 5.0 },
      { date: "14/05/2022", credit: "", debit: "2.00", balance: 3.0 },
    ]);
  });

  it("prints the statement of all transactions", () => {
    bank.deposit(10.35);
    const spy = jest.spyOn(statement, "generateStatement");
    bank.printStatement();
    expect(spy).toHaveBeenCalled();
  });
});
