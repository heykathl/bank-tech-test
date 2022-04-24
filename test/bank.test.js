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
    bank.deposit(10.00);
    bank.withdraw(5.00);
    bank.withdraw(2.00);
    expect(bank.getTransactions()).toEqual([
      {type: "credit", amount: 10.00},
      {type: "debit",amount: 5.00},
      {type: "debit",amount: 2.00}
    ]);
  });

  it("stores the date of when the money was deposited into bank", () => {
   bank.deposit(10.00, "14/01/2023");
   expect(bank.getTransactions()).toEqual([
     {type: "credit", date: "14/01/2023", amount: 10.00}
    ]);
  });

  it("stores the date of when the money is withdrawn from bank", () => {
    bank.deposit(10.00, "14/01/2023");
    bank.withdraw(5.00, "15/01/2023");
    expect(bank.getTransactions()).toEqual([
      {type: "credit", date: "14/01/2023", amount: 10.00},
      {type: "debit", date: "15/01/2023", amount: 5.00}
    ])
  });
})