import sma from "./sma";

/**
 * https://en.wikipedia.org/wiki/Moving_average#Exponential_moving_average
 *
 * @param period
 * @param src
 */
export default function* ema(period: number, src: Iterable<number>) {
    const exp = 2 / (period + 1);
    let ema: number;
    for (let mean of sma(period, src)) {
        yield (ema = (ema !== undefined) ? (ema + (mean - ema) * exp) : mean);
    }
}
