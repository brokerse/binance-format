[![Latest Version](https://img.shields.io/github/release/clubinvestbr/binance-format.svg?style=flat-square)](https://github.com/clubinvest/binance-format/releases) 
[![GitHub last commit](https://img.shields.io/github/last-commit/clubinvestbr/binance-format.svg?maxAge=2400)](#)
[![npm downloads](https://img.shields.io/npm/dt/clubinvestbr/binance-format.svg?maxAge=7200)](https://www.npmjs.com/package/clubinvestbr/binance-format)

[![NPM](https://nodei.co/npm/clubinvestbr/binance-format.png?compact=true)](https://npmjs.org/package/clubinvestbr/binance-format)

[![Build Status](https://travis-ci.org/clubinvestbr/binance-format.svg?branch=master&style=flat-square)](https://travis-ci.org/clubinvestbr/binance-format) 
[![Coverage Status](https://coveralls.io/repos/github/clubinvestbr/binance-format/badge.svg?branch=master&style=flat-square)](https://coveralls.io/github/clubinvestbr/binance-format)
[![CodeCov](https://codecov.io/gh/clubinvestbr/binance-format/branch/master/graph/badge.svg?style=flat-square)](https://codecov.io/github/clubinvestbr/binance-format/)
[![Codacy Badge](https://api.codacy.com/project/badge/Coverage/996757cec66542c0a64fca2b4cf8a936)](https://www.codacy.com/app/dmzoneill/clubinvestbr/binance-format?utm_source=github.com&utm_medium=referral&utm_content=clubinvestbr/binance-format&utm_campaign=Badge_Coverage)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/996757cec66542c0a64fca2b4cf8a936)](https://www.codacy.com/app/dmzoneill/clubinvestbr/binance-format?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=clubinvestbr/binance-format&amp;utm_campaign=Badge_Grade)

# Binance Format
This project was developed to assist in formatting the binance symbols to better represent values in both the backend and front end. No api is used to query and perform the formatting, it is purely done with string manipulation to have more performance and availability.

#### Installation

##### NPM 
```
npm install @clubinvestbr/format --save
```

##### YARN
```
yarn add @clubinvestbr/format
```

#### Getting started
```javascript
format("BTCETH");
// "BTC/ETH"
```