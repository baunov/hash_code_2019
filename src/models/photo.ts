export type Orientation = 'H' | 'V';

export interface Photo {
    id: number;
    tags: string[];
    orientation: Orientation;
}
