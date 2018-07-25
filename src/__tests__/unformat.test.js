const unformat = require('../unformat');

test("should unformat the ETH/BTC value for ETHBTC", () => {
    expect(unformat("ETH/BTC")).toBe("ETHBTC");
});

test("should unformat the BTC/USDT value for BTCUSDT", () => {
    expect(format("BTC/USDT")).toBe("BTCUSDT");
});

test("should unformat the ETH/CLOAK value for ETHCLOAK", () => {
    expect(format("ETH/CLOAK")).toBe("ETHCLOAK");
});

test("should format the BTC/ETH value for BTCETH", () => {
    expect(format("BTC/ETH")).toBe("BTCETH");
});

test("should format the USDT/BTC value for USDTBTC", () => {
    expect(format("USDT/BTC")).toBe("USDTBTC");
});

test("should format the CLOAK/ETH value for CLOAKETH", () => {
    expect(format("CLOAK/ETH")).toBe("CLOAKETH");
});