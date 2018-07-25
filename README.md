[![Latest Version](https://img.shields.io/github/release/clubinvest/binance-format.svg?style=flat-square)](https://github.com/clubinvest/binance-format/releases) 
[![GitHub last commit](https://img.shields.io/github/last-commit/clubinvest/binance-format.svg?maxAge=2400)](#)
[![npm downloads](https://img.shields.io/npm/dt/node-binance-api.svg?maxAge=7200)](https://www.npmjs.com/package/node-binance-api)

[![NPM](https://nodei.co/npm/node-binance-api.png?compact=true)](https://npmjs.org/package/node-binance-api)

[![Build Status](https://travis-ci.org/clubinvest/binance-format.svg?branch=master&style=flat-square)](https://travis-ci.org/clubinvest/binance-format) 
[![Coverage Status](https://coveralls.io/repos/github/clubinvest/binance-format/badge.svg?branch=master&style=flat-square)](https://coveralls.io/github/clubinvest/binance-format)
[![CodeCov](https://codecov.io/gh/clubinvest/binance-format/branch/master/graph/badge.svg?style=flat-square)](https://codecov.io/github/clubinvest/binance-format/)
[![Codacy Badge](https://api.codacy.com/project/badge/Coverage/996757cec66542c0a64fca2b4cf8a936)](https://www.codacy.com/app/dmzoneill/node-binance-api?utm_source=github.com&utm_medium=referral&utm_content=clubinvest/binance-format&utm_campaign=Badge_Coverage)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/996757cec66542c0a64fca2b4cf8a936)](https://www.codacy.com/app/dmzoneill/node-binance-api?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=clubinvest/binance-format&amp;utm_campaign=Badge_Grade)

# Node Binance API
This project was developed to assist in formatting the binance symbols to better represent values in both the backend and front end. No api is used to query and perform the formatting, it is purely done with string manipulation to have more performance and availability.


#### Installation
```
npm install @clubinvestbr/format --save
```

#### Getting started
```javascript
format("BTCETH");
// "BTC/ETH"
```