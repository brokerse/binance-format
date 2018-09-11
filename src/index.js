"use strict";

const format = require('./format');
const unformat = require('./unformat');

module.exports = {
    format,
    unformat,
};

module.exports.format = format;
module.exports.unformat = unformat;

console.log(format("QTUMUSDT"))
console.log(format("TUSDUSDT"))
console.log(format("IOTAUSDT"))

console.log(unformat("QTUM/USDT"))
console.log(unformat("TUSD/USDT"))
console.log(unformat("IOTA/USDT"))