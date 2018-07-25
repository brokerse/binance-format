const unformat = require('../unformat');

test("should unformat the ETH/BTC value for ETHBTC", () => {
    expect(unformat("ETH/BTC")).toBe("ETHBTC");
});

test("should unformat the BTC/USDT value for BTCUSDT", () => {
    expect(unformat("BTC/USDT")).toBe("BTCUSDT");
});

test("should unformat the ETH/CLOAK value for ETHCLOAK", () => {
    expect(unformat("ETH/CLOAK")).toBe("ETHCLOAK");
});

test("should format the BTC/ETH value for BTCETH", () => {
    expect(unformat("BTC/ETH")).toBe("BTCETH");
});

test("should format the USDT/BTC value for USDTBTC", () => {
    expect(unformat("USDT/BTC")).toBe("USDTBTC");
});

test("should format the CLOAK/ETH value for CLOAKETH", () => {
    expect(unformat("CLOAK/ETH")).toBe("CLOAKETH");
});