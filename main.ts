#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "Chalk";

console.log(
  chalk.blue.bold("\n\tWell-Come to Izhar Currency Converter Application\n\t")
);

let exchangeRate: any = {
  USD: 1,
  EUR: 0.9,
  JUP: 150,
  CAD: 1.8,
  AUD: 2.22,
  PAK: 290,
};
//add more currencies and exchange rates here
let userAns = await inquirer.prompt([
  {
    name: "fromCurrency",
    type: "list",
    message: chalk.blue.italic("select the currency to convert from"),
    choices: ["USD", "EUR", "JUP", "CAD", "AUD", "PAK"],
  },
  {
    name: "toCurrency",
    type: "list",
    message: chalk.blue.bgYellow("select the currency to convert into:"),
    choices: ["USD", "EUR", "JUP", "CAD", "AUD", "PAK"],
  },
  {
    name: "amount",
    type: "input",
    message: chalk.green.bold("Enter the amount to convert"),
  },
]);
//perform currency conversion by using formula

let fromAmount = exchangeRate[userAns.fromCurrency];
let toAmount = exchangeRate[userAns.toCurrency];
let amount = userAns.amount;
// Formula of conversion
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(`Converted amount = ${chalk.green(convertedAmount.toFixed(2))}`);