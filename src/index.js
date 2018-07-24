"use strict";

const symbolListWithFourLetters = require('./jsons/symbolListWithFourLetters');
const symbolListWithFiveLetters = require('./jsons/symbolListWithFiveLetters');

function format(value) {
    if (typeof value !== 'string') {
        throw new Error("Report type error valid string");
    }

    switch (value.length) {
        case 6:
            return `${value.substring(0, 3)}/${value.substring(3)}`;
        case 7:
            const symbol = symbolListWithFourLetters.filter(s => value.includes(s)[0]);
            const splittedValue = value.split(symbol);
            return `${splittedValue[0]}/${splittedValue[1]}`;
        case 8:
            const symbol = symbolListWithFourLetters.filter(s => value.includes(s)[0]);
            const splittedValue = value.split(symbol);
            return `${splittedValue[0]}/${splittedValue[1]}`;

        default:
        //return throw new Error("Invalid symbol, enter a valid symbol to perform the formatting");
    }
}

const test1 = format("ETHBTC");
const test2 = format("BTCUSTD");
const test3 = format("ETHCLOAK");

console.log(test1, test2, test3);

module.exports = format;


