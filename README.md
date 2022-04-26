# Bank Tech Test

A program which allows users to deposit and withdraw money; and print out a statement displaying all the transactions made.

## How to install
Fork or clone the respository to your local machine.
```
git clone https://github.com/heykathl/bank-tech-test
```
Once the repository has been cloned you will be able to install the dependencies.
```
npm install
```

## How to use
Run `node` and set up the files and classes as follows:
```
> const Bank = require("./lib/bank");
undefined
> const Statement = require("./lib/statement");
1650902753769
undefined
> const statement = new Statement();
undefined
> const bank = new Bank(statement);
``` 

To deposit or withdraw money into the account
```
bank.deposit(<insert amount as an integer>, <insert date as a string>)
```
```
bank.withdraw(<insert amount as an integer>, <insert date as a string>)
```

An example is shown below, and as shown in the Bank object, the transaction has been stored and balance updated
```
> bank.deposit(10)
> bank.withdraw(5.5)
undefined
> bank
Bank {
  balance: 10,
  transactions: [
    {
      type: 'credit',
      date: '26/04/2022',
      amount: '10.00',
      balance: 10
    },
    { type: 'debit', date: '26/04/2022', amount: '5.50', balance: 4.5 }
  ],
  statement: Statement {
    statement: [],
    header: 'date || credit || debit || balance'
  }
}
```
To print a statement, run the following:
```
> bank.printStatement();
'date || credit || debit || balance\n' +
  '26/04/2022 || 10.00 ||  || 10.00\n' +
  '26/04/2022 ||  || 5.50 || 4.50'
```

## Testing
There are a series of tests which can be run with the following.
Change into the relevant directory with 
```
cd bank-tech-test
```
Run 
```
jest
``` 
To run tests from specific class files, this can be done by:
```
jest test/<filename>.test.js
```

## My approach to the challenge
The challenge began with me drafting the user stories for each requirement outlined [here](https://github.com/makersacademy/course/blob/main/individual_challenges/bank_tech_test.md). 
I began diagramming the Bank class, and its associated methods. During the process, I realised that it would have been appropriate to make a new class to print the statement of transactions, as shown below. This is to ensure that my code follows single resposibility principle (SRP).
<img width="467" alt="Screenshot 2022-04-25 at 18 31 05" src="https://user-images.githubusercontent.com/74867241/165142380-2c53bab0-56b4-4146-8773-3e7da5420617.png">

## User Stories
```
As a customer,
So that I can save my money to save up for nice things,
I would like to deposit money into my bank account.
```
```
As a customer,
To treat myself to a new pair of shoes,
I would like to withdraw money from my bank account.
```
```
As a customer,
So that I know whether I can afford that pair of shoes,
I would like to be able to see my balance.
```
```
As a customer,
So I can keep track of my saving and spending habits,
I would like to see a statement of all of my deposit and withdrawals
```
