import {Photo} from '../models/photo';

export function getSimilarity(tags1: string[], tags2: string[]): number {
    const uniqueTags = new Set([...tags1, ...tags2]);
    const tags1Set = new Set(tags1);
    const tags2Set = new Set(tags2);
    const intersection = getIntersectionSet(tags1Set, tags2Set);

    const tags1Only = tags1.filter((tag1) => !intersection.has(tag1));
    const tags2Only = tags2.filter((tag2) => !intersection.has(tag2));

    return Math.min(intersection.size, tags1Only.length, tags2Only.length);
}

export function getIntersectionSet(set1: Set<string>, set2: Set<string>): Set<string> {
    const newSet = new Set();
    set1.forEach((set1Val) => {
        if(set2.has(set1Val)) {
            newSet.add(set1Val);
        }
    });
    return newSet;
}
