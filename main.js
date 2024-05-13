#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var Chalk_1 = require("Chalk");
console.log(Chalk_1.default.blue.bold("\n\tWell-Come to Izhar Currency Converter Application\n\t"));
var exchangeRate = {
    USD: 1,
    EUR: 0.9,
    JUP: 150,
    CAD: 1.8,
    AUD: 2.22,
    PAK: 290,
};
//add more currencies and exchange rates here
var userAns = await inquirer_1.default.prompt([
    {
        name: "fromCurrency",
        type: "list",
        message: Chalk_1.default.blue.italic("select the currency to convert from"),
        choices: ["USD", "EUR", "JUP", "CAD", "AUD", "PAK"],
    },
    {
        name: "toCurrency",
        type: "list",
        message: Chalk_1.default.blue.bgYellow("select the currency to convert into:"),
        choices: ["USD", "EUR", "JUP", "CAD", "AUD", "PAK"],
    },
    {
        name: "amount",
        type: "input",
        message: Chalk_1.default.green.bold("Enter the amount to convert"),
    },
]);
//perform currency conversion by using formula
var fromAmount = exchangeRate[userAns.fromCurrency];
var toAmount = exchangeRate[userAns.toCurrency];
var amount = userAns.amount;
// Formula of conversion
var baseAmount = amount / fromAmount;
var convertedAmount = baseAmount * toAmount;
console.log("Converted amount = ".concat(Chalk_1.default.green(convertedAmount.toFixed(2))));
