import iterator from "@thi.ng/iterators/iterator";
import DCons from "@thi.ng/dcons";

export default function (period: number, src: Iterator<number>) {
    let window = new DCons<number>(),
        v: IteratorResult<number>,
        i = 0;
    for (; i < period && !(v = src.next()).done; i++) {
        window.push(v.value);
    }
    if (i < period) {
        throw new Error(`insufficient values, expected at least ${period}, got ${window.length}`);
    }
    return window;
}
