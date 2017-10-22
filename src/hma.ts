import fork from "@thi.ng/iterators/fork";
import map from "@thi.ng/iterators/map";

import wma from "./wma";

/**
 * https://www.fidelity.com/learning-center/trading-investing/technical-analysis/technical-indicator-guide/hull-moving-average
 */
export default function hma(period: number, src: Iterable<number>) {
    const f = fork(src, period);
    return wma(
        Math.sqrt(period),
        map(
            (a, b) => 2 * a - b,
            wma(period / 2, f()),
            wma(period, f())
        )
    );
}
