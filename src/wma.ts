import partition from "@thi.ng/iterators/partition";

/**
 * https://en.wikipedia.org/wiki/Moving_average#Weighted_moving_average
 *
 * @param weights
 * @param src
 */
export default function* wma(weights: number[], src: Iterable<number>) {
    const period = weights.length;
    let wsum = 0;
    for (let i = 0; i < period; i++) {
        wsum += weights[i];
    }
    for (let part of partition(period, 1, src)) {
        let sum = 0;
        for (let i = 0; i < period; i++) {
            sum += part[i] * weights[i];
        }
        yield sum / wsum;
    }
}
