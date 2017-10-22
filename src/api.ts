export interface Tick {
    ask: number;
    bid: number;
    mid: number;
    spread: number;
    epoch: number;
}

export interface OHLC {
    open: number;
    high: number;
    low: number;
    close: number;
    epoch: number;
    timeISO: string;
    volume: number;
}

export enum Period {
    M1 = 60,
    M5 = Period.M1 * 5,
    M15 = Period.M1 * 15,
    M30 = Period.M1 * 30,
    H1 = Period.M1 * 60,
    H4 = Period.H1 * 4,
    DAY = Period.H1 * 24,
    WEEK = Period.DAY * 7,
}

export interface Bounds {
    min: number;
    max: number;
}

export interface BoundsMean extends Bounds {
    mean: number;
}

export interface BollingerBand extends BoundsMean {
    pb: number;
}
