const format = require('../format');

test("should format the AEBTC value for AE/BTC", () => {
    expect(format("AEBTC")).toBe("AE/BTC");
});

test("should format the SCBTC value for SC/BTC", () => {
    expect(format("SCBTC")).toBe("SC/BTC");
});

test("should format the ETHBTC value for ETH/BTC", () => {
    expect(format("ETHBTC")).toBe("ETH/BTC");
});

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

test("should format the QTUMUSDT value for QTUM/USDT", () => {
    expect(format("QTUMUSDT")).toBe("QTUM/USDT");
});

test("should format the TUSDUSDT value for TUSD/USDT", () => {
    expect(format("TUSDUSDT")).toBe("TUSD/USDT");
});

test("should format the IOTAUSDT value for IOTA/USDT", () => {
    expect(format("IOTAUSDT")).toBe("IOTA/USDT");
});

test("should format the BCHSVBTC value for BCHSV/BTC", () => {
    expect(format("BCHSVBTC")).toBe("BCHSV/BTC");
});

test("should format the DASHUSDT value for DASH/USDT", () => {
    expect(format("DASHUSDT")).toBe("DASH/USDT");
});