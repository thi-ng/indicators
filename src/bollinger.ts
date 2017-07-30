import fork from "@thi.ng/iterators/fork";
import partition from "@thi.ng/iterators/partition";

import { BollingerBand } from "./api";
import sma from "./sma";
import { mse } from "./sd";

/**
 * https://en.wikipedia.org/wiki/Bollinger_Bands
 *
 * @param period
 * @param sd
 * @param src
 */
export default function* bollinger(period: number, sd: number, src: Iterable<number>) {
    const f = fork(src, period),
        smaIter = sma(period, f());
    for (let part of partition(period, 1, f())) {
        const mean = smaIter.next().value,
            std = Math.sqrt(mse(part, mean) / period) * sd,
            min = mean - std,
            max = mean + std,
            pb = (part[period - 1] - min) / (max - min);
        yield <BollingerBand>{ min, mean, max, pb };
    }
}
