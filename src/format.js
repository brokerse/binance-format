const icoListOne = [
    "AION",
    "APPC",
    "ARDR",
    "BCPT",
    "CHAT",
    "DASH",
    "DATA",
    "DENT",
    "FUEL",
    "IOST",
    "IOTA",
    "IOTX",
    "LEND",
    "LINK",
    "LOOM",
    "MANA",
    "NANO",
    "NEBL",
    "NPXS",
    "NULS",
    "PIVX",
    "POWR",
    "SALT",
    "TRIG",
    "TUSD",
    "USDT",
    "VIBE",
    "WABI", 
    "YOYO"
];

const icoListTwo = [
    "CLOAK",
    "NCASH",
    "SNGLS",
    "STEEM",
    "STORJ",
    "STORM",
    "STRAT",
    "THETA",
    "TUSDU",
    "WAVES",
    "WINGS"
];

function formatWithFourLetters(value) {
    const initialValue = value.substring(0, 4);

    return icoListOne.includes(initialValue)
        ? `${initialValue}/${value.substring(4)}`
        : `${value.substring(0, 3)}/${value.substring(3)}`;
}

function formatWithFiveLetters(value) {
    const initialValue = value.substring(0, 5);
    const endValue = value.substring(5, 0);

    return icoListOne.includes(initialValue)
        ? `${initialValue}/${value.substring(5)}`
        : icoListTwo.includes(endValue) 
            ? `${value.substring(0, 5)}/${value.substring(5)}`
            : `${value.substring(0, 3)}/${value.substring(3)}`; 
}

function format(value) {
    if (typeof value !== 'string') {
        throw new Error("Report type error valid string");
    }

    AEBTC
    SCBTC 
    AEBNB 
    
    QTUMUSDT
    TUSDUSDT
    IOTAUSDT



    switch (value.length) {
        case 6:
            return `${value.substring(0, 3)}/${value.substring(3)}`;
        case 7:
            return formatWithFourLetters(value);
        case 8:
            return formatWithFiveLetters(value);
        default:
            return value;
    }
}

module.exports = format;