const unformat = require('../unformat');

test("should format the AE/BTC value for AEBTC", () => {
    expect(unformat("AE/BTC")).toBe("AEBTC");
});

test("should format the SC/BTC value for SCBTC", () => {
    expect(unformat("SC/BTC")).toBe("SCBTC");
});

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

test("should format the QTUM/USDT value for QTUMUSDT", () => {
    expect(unformat("QTUM/USDT")).toBe("QTUMUSDT");
});

test("should format the TUSD/USDT value for TUSDUSDT", () => {
    expect(unformat("TUSD/USDT")).toBe("TUSDUSDT");
});

test("should format the IOTA/USDT value for IOTAUSDT", () => {
    expect(unformat("IOTA/USDT")).toBe("IOTAUSDT");
});