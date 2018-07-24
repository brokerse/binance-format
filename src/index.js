const symbolListWithFourLetters = require('./jsons/symbolListWithFourLetters');
const symbolListWithFiveLetters = require('./jsons/symbolListWithFiveLetters');

module.exports = function format(value) {
    if(typeof value !== 'string') {
        throw new Error("Report type error valid string");
    } 

    switch (value.length) {
        case 6:
            return `${value.substring(0, 3)}/${value.substring(3)}`;
        case 7:
            const symbol = symbolListWithFourLetters.filter(symbol => value.includes(symbol)[0]);
            const splittedValue = value.split(symbol);
            return `${splittedValue[0]}/${splittedValue[1]}`;
        case 8:
            const symbol = symbolListWithFourLetters.filter(symbol => value.includes(symbol)[0]);
            const splittedValue = value.split(symbol);
            return `${splittedValue[0]}/${splittedValue[1]}`;
    
        default:
            return throw new Error("Invalid symbol, enter a valid symbol to perform the formatting")
            break;
    }


    if(value.length === 6) {
        return `${value.substring(0, 3)}/${value.substring(3)}`;
    }
    if(value.length === 7) {
        const symbol = symbolListWithFourLetters.filter(symbol => value.includes(symbol)[0]);
        const splittedValue = value.split(symbol);
        return `${splittedValue[0]}/${splittedValue[1]}`;
    }
    if(value.length === 8) {
        const symbol = symbolListWithFourLetters.filter(symbol => value.includes(symbol)[0]);
        const splittedValue = value.split(symbol);
        return `${splittedValue[0]}/${splittedValue[1]}`;
    }
}