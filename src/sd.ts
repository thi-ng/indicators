import fork from "@thi.ng/iterators/fork";
import partition from "@thi.ng/iterators/partition";
import sma from "./sma";

/**
 * Moving standard deviation iterator.
 * For each period calculates sum of squared differences to SMA.
 * Yields sequence of `sqrt(sum / period)`.
 *
 * https://en.wikipedia.org/wiki/Standard_deviation#Uncorrected_sample_standard_deviation
 *
 * @param period number of samples per period
 * @param src samples
 */
export default function* sd(period: number, src: Iterable<number>) {
    const f = fork(src, period),
        smaIter = sma(period, f());
    for (let part of partition(period, 1, f())) {
        yield Math.sqrt(mse(part, smaIter.next().value) / period);
    }
}

export function mse(part: number[], mean: number) {
    let sum = 0;
    for (let i = part.length - 1; i >= 0; i--) {
        sum += Math.pow((part[i] - mean), 2);
    }
    return sum;
}
