import partition from "@thi.ng/iterators/partition";

import { Bounds } from "./api";

/**
 * Yields a sequence of min/max values for shifting period.
 * https://en.wikipedia.org/wiki/Donchian_channel
 *
 * @param period
 * @param src
 */
export default function* donchian(period: number, src: Iterable<number>) {
    for (let part of partition(period, 1, src)) {
        let min = Number.MAX_VALUE,
            max = -min;
        for (let i = 0; i < period; i++) {
            const v = part[i];
            min = Math.min(min, v);
            max = Math.max(max, v);
        }
        yield <Bounds>{ min, max };
    }
}
