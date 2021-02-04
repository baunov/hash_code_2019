import {Photo} from '../models/photo';
import {ByTagsMap} from './getPhotosByTagsMap';


// score based on how many photos with intersecting tags are
export function getPhotoScore(photo: Photo, byTags: ByTagsMap): number {
    return photo.tags.reduce((sum, tag) => sum + byTags[tag].size, 0);
}
