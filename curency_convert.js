#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var currency = {
    usd: 1,
    eur: 0.99,
    gbp: 0.76,
    inr: 74.57,
    pkr: 280
};
var user_ans = await inquirer_1.default.prompt([
    {
        name: "from",
        message: "enter from currency",
        type: "list",
        choices: ["usd", "eur", "gbp", "inr", "pkr"]
    },
    {
        name: "to",
        message: "enter to currency",
        type: "list",
        choices: ["usd", "eur", "gbp", "inr", "pkr"]
    },
    {
        name: "amount",
        message: "enter your amount",
        type: "number"
    }
]);
console.log(user_ans);
var fromCurrency = currency[user_ans.from];
console.log("".concat(user_ans.from, " ").concat(fromCurrency));
var toCurrency = currency[user_ans.to];
console.log("".concat(user_ans.to, " ").concat(toCurrency));
var amount = user_ans.amount;
console.log("amount =   ".concat(amount));
var baseAmount = amount / fromCurrency;
console.log("your base amount will be in ".concat(user_ans.to, " is ").concat(baseAmount));
var convertedAmount = toCurrency * amount;
console.log("your converted amount in ".concat(user_ans.to, " is ").concat(baseAmount));
console.log("\n\tthankyou Sir Okasha for the best teaching style and explain the project very well\n\t");
