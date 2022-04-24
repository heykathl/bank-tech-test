const Bank = require('../lib/bank')

describe("Bank", () => {
  let bank;

  beforeEach(() => {
    bank = new Bank();
  });

  it("it returns bank balance", () => {
    expect(bank.getBalance()).toBe(0)
  });

  it("can deposit money into the bank account and balance is updated", () => {
    bank.deposit(10.00);
    expect(bank.getBalance()).toBe(10.00);
  });

  it("can withdraw money from the bank account and balance is updated", () => {
    bank.deposit(10.00);
    bank.withdraw(5.00);
    expect(bank.getBalance()).toBe(5.00);
  });

  it("keeps a list of the transactions made", () => {
    bank.deposit(10.00);
    bank.deposit(5.00);
    expect(bank.getTransactions()).toEqual([
      {amount: 10.00},
      {amount: 5.00}
    ])
  })

  // it("stores the date of when the money was deposited into bank", () => {
  //  bank.deposit(10, "14/01/2023");
  //  expect(bank.getTransactions()).toEqual([["14/01/2023", 10]]);
  // });

  // it("stores the date of when the money is withdrawn from bank", () => {
  //   bank.deposit(10, "14/01/2023");
  //   bank.withdraw(5, "15/01/2023");
  //   expect(bank.getTransactions()).toEqual([["14/01/2023", 10], ["15/01/2023", 5]])
  // });

  // it("stores all transactions on same day together", () => {
  //   bank.deposit(10, "14/01/2023");
  //   bank.withdraw(5, "14/01/2023");
  //   expect(bank.getTransactions()).toEqual([["14/01/2023", 10, 5]])
  // });

  // it("transactions to display whether the transaction was a credit or debit", () => {
  //   bank.deposit(10, "14/01/2023");
  //   expect(bank.getTransactions()).toEqual([{
  //     type: "credit",
  //     amount: 10}])
  // })
})