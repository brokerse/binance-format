const format = require('../src');

describe("should format the ETH BTC value for ETH/BTC", () => {
    const symbol = format(ETHBTC);
    symbol.expect("ETH/BTC");
});


// const test1 = format("ETHBTC");
// const test2 = format("BTCUSDT");
// const test3 = format("ETHCLOAK");

// console.log(test1, test2, test3);