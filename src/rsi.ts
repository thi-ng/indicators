import fork from "@thi.ng/iterators/fork";
import map from "@thi.ng/iterators/map";
import momentum from "./momentum";

import sma from "./sma";

/**
 * https://en.wikipedia.org/wiki/Relative_strength_index
 *
 * @param period
 * @param src
 */
export default function* rsi(period: number, src: Iterable<number>) {
    const moments = fork(momentum(1, src)),
        up = sma(period, map((x) => (x > 0 ? x : 0), moments())),
        down = sma(period, map((x) => (x < 0 ? -x : 0), moments()));
    for (let u of up) {
        let d = Math.max(1e-6, down.next().value);
        yield 100 - 100 / (1 + u / d);
    }
}
