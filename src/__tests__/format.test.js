const format = require("../format");

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

test("should format the WAVESBTC value for WAVES/BTC", () => {
    expect(format("WAVESBTC")).toBe("WAVES/BTC");
});

test("should format the WAVESUSDT value for WAVES/USDT", () => {
    expect(format("WAVESUSDT")).toBe("WAVES/USDT");
});

test("should format the ATOMBTC value for ATOM/BTC", () => {
    expect(format("ATOMBTC")).toBe("ATOM/BTC");
});

test("should format the ATOMUSDT value for ATOM/USDT", () => {
    expect(format("ATOMUSDT")).toBe("ATOM/USDT");
});

test("should format the LINKUSDT value for LINK/USDT", () => {
    expect(format("LINKUSDT")).toBe("LINK/USDT");
});

test("should format the LINKUSDC value for LINK/USDC", () => {
    expect(format("LINKUSDC")).toBe("LINK/USDC");
});

test("should format the LINKBTC value for LINK/BTC", () => {
    expect(format("LINKBTC")).toBe("LINK/BTC");
});

test("should format the BTCBBTC value for BTCB/BTC", () => {
    expect(format("BTCBBTC")).toBe("BTCB/BTC");
});

test("should format the BCPTTUSD value for BCPT/TUSD", () => {
    expect(format("BCPTTUSD")).toBe("BCPT/TUSD");
});

test("should format the ALGOBTC value for ALGO/BTC", () => {
    expect(format("ALGOBTC")).toBe("ALGO/BTC");
});

test("should format the ALGOTUSD value for ALGO/TUSD", () => {
    expect(format("ALGOTUSD")).toBe("ALGO/TUSD");
});

test("should format the USDSBUSDT value for USDSB/USDT", () => {
    expect(format("USDSBUSDT")).toBe("USDSB/USDT");
});

test("should format the USDSBUSDS value for USDSB/USDS", () => {
    expect(format("USDSBUSDS")).toBe("USDSB/USDS");
});

test("should format the GTOPAX value for GTO/PAX", () => {
    expect(format("GTOPAX")).toBe("GTO/PAX");
});

test("should format the GTOUSDC value for GTO/USDC", () => {
    expect(format("GTOUSDC")).toBe("GTO/USDC");
});
