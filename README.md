# @thi.ng/indicators

![npm (scoped)](https://img.shields.io/npm/v/@thi.ng/indicators.svg)

ES6 Iterators of [technical indicators](https://en.wikipedia.org/wiki/Technical_indicator)
for statistical / financial analysis.

All indicators consume iterables of plain numbers and have configurable periods.

## Supported indicators

- [Bollinger Bands](https://github.com/thi-ng/indicators/blob/master/src/bollinger.ts)
- [Donchian Channel](https://github.com/thi-ng/indicators/blob/master/src/donchian.ts)
- [EMA (Exponential Moving Average)](https://github.com/thi-ng/indicators/blob/master/src/ema.ts)
- [Momentum](https://github.com/thi-ng/indicators/blob/master/src/momentum.ts)
- [ROC (Rate of change)](https://github.com/thi-ng/indicators/blob/master/src/roc.ts)
- [RSI (Relative Strength Index)](https://github.com/thi-ng/indicators/blob/master/src/rsi.ts)
- [SD (Standard Deviation)](https://github.com/thi-ng/indicators/blob/master/src/sd.ts)
- [SMA (Simple Moving Average)](https://github.com/thi-ng/indicators/blob/master/src/sma.ts)
- [TRIX (Triple smoothed EMA)](https://github.com/thi-ng/indicators/blob/master/src/trix.ts)
- [WMA (Weighted Moving Average)](https://github.com/thi-ng/indicators/blob/master/src/wma.ts)

## Usage

All indicators are defined as sub-modules and exposed as default exports. This
is an additional feature. The full library can be imported via:

```js
indi = require("@thi.ng/indicators");
```

## Building

### Build requirements

Building & testing this project requires [Typescript](http://typescriptlang.org)
and [Mocha](http://mochajs.org/) globally installed:

```
npm i typescript mocha -g
```

```
git clone https://github.com/thi-ng/indicators.git
cd indicators
npm up
npm run build
```

### Testing

```
npm link mocha
npm run test
```

# Authors
- Karsten Schmidt

# License

&copy; 2017 Karsten Schmidt // Apache Software License 2.0