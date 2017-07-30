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
