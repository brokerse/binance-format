const format = require('../src');

test("should format the ETHBTC value for ETH/BTC", () => {
    expect(format("ETHBTC")).toBe("ETH/BTC");
});

test("should format the BTCUSDT value for BTC/USDT", () => {
    expect(format("BTCUSDT")).toBe("BTC/USDT");
});

test("should format the ETHCLOAK value for ETH/CLOAK", () => {
    expect(format("ETHCLOAK")).toBe("ETH/CLOAK");
});