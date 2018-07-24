const format = require('../src');

describe("should format the ETHBTC value for ETH/BTC", () => {
    expect(format("ETHBTC")).toBe("BTC/USDT");
});

describe("should format the BTCUSDT value for BTC/USDT", () => {
    expect(format("BTCUSDT")).toBe("BTC/USDT");
});

describe("should format the ETHCLOAK value for ETH/CLOAK", () => {
    expect(format("ETHCLOAK")).toBe("ETH/CLOAK");
});