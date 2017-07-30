# @thi.ng/indicators

ES6 Iterators of 10 [technical indicators](https://en.wikipedia.org/wiki/Technical_indicator)
for statistical / financial analysis.

## Supported indicators

- [Bollinger Bands](src/bollinger.ts)
- [Donchian Channel](src/donchian.ts)
- [EMA (Exponential Moving Average)](src/ema.ts)
- [Momentum](src/momentum.ts)
- [ROC (Rate of change)](src/roc.ts)
- [RSI (Relative Strength Index)](src/rsi.ts)
- [SD (Standard Deviation)](src/sd.ts)
- [SMA (Simple Moving Average)](src/sma.ts)
- [TRIX (Triple smoothed EMA)](src/trix.ts)
- [WMA (Weighted Moving Average)](src/wma.ts)

## Building

### Build requirements

Building & testing this project requires [Typescript](http://typescriptlang.org)
and [Mocha](http://mochajs.org/) globally installed:

```
npm i typescript mocha -g
```

```
cd thing-indicators
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