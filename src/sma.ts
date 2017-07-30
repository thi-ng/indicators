import iterator from "@thi.ng/iterators/iterator";
import prefill from "./prefill";

/**
 * https://en.wikipedia.org/wiki/Moving_average#Simple_moving_average
 *
 * @param period
 * @param src
 */
export default function* sma(period: number, src: Iterable<number>) {
    const iter = iterator(src),
        window = prefill(period, iter);
    let v: IteratorResult<number>,
        sum = 0;
    for (let v of window) {
        sum += v;
    }
    yield sum / period;
    while (!(v = iter.next()).done) {
        sum = sum - window.drop() + v.value;
        window.push(v.value);
        yield sum / period;
    }
}