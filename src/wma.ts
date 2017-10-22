import partition from "@thi.ng/iterators/partition";

/**
 * https://en.wikipedia.org/wiki/Moving_average#Weighted_moving_average
 *
 * @param weights period or array of weights
 * @param src
 */
export default function* wma(weights: number | number[], src: Iterable<number>) {
    let period, wsum;
    if (typeof weights === "number") {
        period = weights | 0;
        weights = [];
        for (let i = 0; i < period; i++) {
            weights.push(i + 1);
        }
        // gauss sum: [1..n]
        wsum = (period * (period + 1)) / 2;
    } else {
        period = weights.length;
        wsum = 0;
        for (let i = 0; i < period; i++) {
            wsum += weights[i];
        }
    }
    for (let part of partition(period, 1, src)) {
        let sum = 0;
        for (let i = 0; i < period; i++) {
            sum += part[i] * weights[i];
        }
        yield sum / wsum;
    }
}
