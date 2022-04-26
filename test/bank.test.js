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

  // it("it returns bank balance", () => {
  //   expect(bank.getBalance()).toBe(0)
  // });

  it("can deposit money into the bank account and balance is updated", () => {
    bank.deposit(10.5);
    expect(bank.getBalance()).toBe(10.5);
  });

  it("can withdraw money from the bank account and balance is updated", () => {
    bank.deposit(10.5);
    bank.withdraw(5.0);
    expect(bank.getBalance()).toBe(5.5);
  });

  // it("keeps a list of each depositing transaction made", () => {
  //   bank.deposit(10.00);
  //   bank.deposit(5.00);
  //   expect(bank.getTransactions()).toEqual([
  //     {amount: 10.00},
  //     {amount: 5.00}
  //   ]);
  // });

  // it("keeps a list of each withdrawal transaction made", () => {
  //   bank.deposit(10.00);
  //   bank.withdraw(5.00);
  //   bank.withdraw(2.00);
  //   expect(bank.getTransactions()).toEqual([
  //     {amount: 10.00},
  //     {amount: 5.00},
  //     {amount: 2.00}
  //   ]);
  // });

  it("stores the type of transaction that was made eg. credit or debit", () => {
    bank.deposit(10.5);
    bank.withdraw(5.5);
    bank.withdraw(2.0);
    expect(bank.getTransactions()).toEqual([
      { type: "credit", date: "14/05/2022", amount: "10.50", balance: 10.5 },
      { type: "debit", date: "14/05/2022", amount: "5.50", balance: 5.0 },
      { type: "debit", date: "14/05/2022", amount: "2.00", balance: 3.0 },
    ]);
  });

  it("stores the balance of when the money was deposited into bank", () => {
    bank.deposit(10.0);
    expect(bank.getTransactions()).toEqual([
      { type: "credit", date: "14/05/2022", amount: "10.00", balance: 10.0 },
    ]);
  });

  // it("stores today's date when carrying out a transaction", () => {
  //   jest
  //     .spyOn(global.Date, 'now')
  //     .mockImplementation(() =>
  //       new Date('2022-05-14T11:01:58.135Z').valueOf()
  //     );

  //   bank.deposit(10.00)
  //   expect(bank.getTransactions()).toEqual([
  //     { type: "credit", date: "14/05/2022", amount: "10.00", balance: 10.00 },
  //   ])
  // })

  it("prints the statement of all transactions", () => {
    bank.deposit(10.35);
    bank.withdraw(5.1);
    expect(bank.printStatement()).toBe(
      "date || credit || debit || balance\n14/05/2022 || 10.35 ||  || 10.35\n14/05/2022 ||  || 5.10 || 5.25"
    );
  });
});
