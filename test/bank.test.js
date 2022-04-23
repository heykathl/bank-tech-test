const Bank = require('../lib/bank')

describe("Bank", () => {

  it("it returns bank balance", () => {
    const bank = new Bank();
    expect(bank.getBalance()).toBe(0)
  });

  it("can deposit money into the bank account", () => {
    const bank = new Bank();
    bank.deposit(10);
    expect(bank.getBalance()).toBe(10);
  });

  it("can withdrawn money from the bank account", () => {
    const bank = new Bank();
    bank.deposit(10);
    bank.withdraw(5);
    expect(bank.getBalance()).toBe(5);
  });
  
})