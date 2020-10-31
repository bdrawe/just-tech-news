const { expect } = require("@jest/globals")

const {format_date} = require('../utils/helper');

test('format_date() returns a date string',() => {
    const date = new Date('2020-03-20 16:23:05')

    expect(format_date(date)).toBe('3/20/2020');
});