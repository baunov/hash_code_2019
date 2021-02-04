import {InputData} from '../models/input-data';
import {Orientation, Photo} from '../models/photo';

export function parseInput(inputStr: string): InputData {
    const rows = inputStr.split('\n');
    const count = parseInt(rows[0]);
    const photos: Photo[] = [];

    for (let rowIndex = 1; rowIndex < count + 1; rowIndex ++) {
        const row = rows[rowIndex];
        const splitRow = row.split(' ');
        const orientation = splitRow[0] as Orientation;

        const tags = splitRow.slice(2);

        photos.push({
            tags,
            orientation,
            id: rowIndex - 1,
        })
    }

    return {
        photos
    };
}
