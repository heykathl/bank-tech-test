const Bank = require('../lib/bank');
const Statement = require('../lib/statement');

describe("Bank", () => {
  let bank;
  let statement;

  beforeEach(() => {
    statement = new Statement()
    bank = new Bank(statement);
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
      {type: "credit", amount: 10.00, balance: 10.00},
      {type: "debit", amount: 5.00, balance: 5.00},
      {type: "debit", amount: 2.00, balance: 3.00}
    ]);
  });

  it("stores the balance of when the money was deposited into bank", () => {
   bank.deposit(10.00);
   expect(bank.getTransactions()).toEqual([
     {type: "credit", amount: 10.00, balance: 10.00}
    ]);
  });

  it("stores the date of when the money is withdrawn from bank", () => {
    bank.deposit(10.00, "14/01/2023");
    bank.withdraw(5.00, "15/01/2023");
    expect(bank.getTransactions()).toEqual([
      {type: "credit", date: "14/01/2023", amount: 10.00, balance: 10.00},
      {type: "debit", date: "15/01/2023", amount: 5.00, balance: 5.00}
    ]);
  });

  it("prints the statement of all transactions", () => {
    bank.deposit(10.00, "14/01/2023");
    bank.withdraw(5.00, "15/01/2023");
    expect(bank.printStatement()).toBe(
      "date || credit || debit || balance\n14/01/2023 || 10 ||  || 10\n15/01/2023 ||  || 5 || 5"
    );
  })
})