const Bank = require('../lib/bank')

describe("Bank", () => {
  let bank;

  beforeEach(() => {
    bank = new Bank();
  });

  it("it returns bank balance", () => {
    expect(bank.getBalance()).toBe(0)
  });

  it("can deposit money into the bank account", () => {
    bank.deposit(10);
    expect(bank.getBalance()).toBe(10);
  });

  it("can withdrawn money from the bank account", () => {
    bank.deposit(10);
    bank.withdraw(5);
    expect(bank.getBalance()).toBe(5);
  });

})