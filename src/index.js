"use strict";

const symbolListWithFourLetters = require('./jsons/symbolListWithFourLetters');
const symbolListWithFiveLetters = require('./jsons/symbolListWithFiveLetters');

function formatWithFourLetters(value) {
    const initialValue = value.substring(0, 4);

    return symbolListWithFourLetters.includes(initialValue)
        ? `${initialValue}/${value.substring(4)}`
        : `${value.substring(0, 3)}/${value.substring(3)}`;
}

function formatWithFiveLetters(value) {
    const initialValue = value.substring(0, 5);

    return symbolListWithFourLetters.includes(initialValue)
        ? `${initialValue}/${value.substring(5)}`
        : `${value.substring(0, 3)}/${value.substring(3)}`;
}


function format(value) {
    if (typeof value !== 'string') {
        throw new Error("Report type error valid string");
    }

    switch (value.length) {
        case 6:
            return `${value.substring(0, 3)}/${value.substring(3)}`;
        case 7:
            return formatWithFourLetters(value);
        case 8:
            return formatWithFiveLetters(value);
        default:
        //return throw new Error("Invalid symbol, enter a valid symbol to perform the formatting");
    }
}

module.exports = format;