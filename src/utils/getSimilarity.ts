import {Photo} from '../models/photo';

export function getSimilarity(tags1: string[], tags2: string[]): number {
    const intersection = getIntersectionSet(tags1, tags2);

    const tags1Only = tags1.filter((tag1) => !intersection.has(tag1));
    const tags2Only = tags2.filter((tag2) => !intersection.has(tag2));

    return Math.min(intersection.size, tags1Only.length, tags2Only.length);
}

export function getIntersectionSet(ar1: string[], ar2: string[]): Set<string> {
    const set1 = new Set(ar1);
    return new Set(ar2.filter((ar2val) => set1.has(ar2val)));
}
