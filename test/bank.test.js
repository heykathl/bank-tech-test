const Bank = require('../lib/bank')

describe("Bank", () => {

  it("it returns bank balance", () => {
    const bank = new Bank();
    expect(bank.getBalance()).toBe(0)
  })
})