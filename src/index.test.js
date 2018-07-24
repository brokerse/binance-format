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

test("should format the BTCETH value for BTC/ETH", () => {
    expect(format("BTCETH")).toBe("BTC/ETH");
});

test("should format the USDTBTC value for USDT/BTC", () => {
    expect(format("USDTBTC")).toBe("USDT/BTC");
});

test("should format the CLOAKETH value for CLOAK/ETH", () => {
    expect(format("CLOAKETH")).toBe("CLOAK/ETH");
});