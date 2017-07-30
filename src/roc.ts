import iterator from "@thi.ng/iterators/iterator";
import prefill from "./prefill";

/**
 * https://en.wikipedia.org/wiki/Momentum_(technical_analysis)
 *
 * @param period
 * @param src
 */
export default function* roc(period: number, src: Iterable<number>) {
    const iter = iterator(src),
        window = prefill(period, iter);
    let v: IteratorResult<number>;
    while (!(v = iter.next()).done) {
        const prev = window.drop();
        window.push(v.value);
        yield (v.value - prev) / prev;
    }
}
