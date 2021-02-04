import {Photo} from '../models/photo';

export type ByTagsMap = Record<string, Set<number>>;

export function getPhotosByTagsMap(photos: Photo[]): ByTagsMap {
    const byTags: ByTagsMap = {};
    photos.forEach((p) => {
        p.tags.forEach((tag) => {
            if (!byTags[tag]) {
                byTags[tag] = new Set();
            }
            byTags[tag].add(p.id);
        })
    });

    return byTags;
}
