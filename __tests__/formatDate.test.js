const formatDate = require('../utils/formatDate');

test ('checks helper returns dates as Mon DD YYYY', () => {
    const date = new Date('2022-03-04T00:23:23.322Z');

    expect(formatDate(date)).toBe('Mar 3 2022');
});