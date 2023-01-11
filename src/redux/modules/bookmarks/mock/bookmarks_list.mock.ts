import { faker } from '@faker-js/faker';

export function getMockBookmarkList(limit = 20) {
    let array = [];
    for (let i = 0; i < limit; i++) {
        array.push({
            id: faker.datatype.uuid(),
            title: faker.music.songName(),
            image: faker.image.image(60, 60)
        });
    }
    return array;
}
