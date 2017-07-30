import ema from "./ema";
import roc from "./roc";

/**
 * https://en.wikipedia.org/wiki/Trix_(technical_analysis)
 *
 * @param period
 * @param src
 */
export default function trix(period: number, src: Iterable<number>) {
    return roc(1, ema(period, ema(period, ema(period, src))));
}
