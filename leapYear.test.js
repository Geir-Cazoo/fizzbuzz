const leapYear = require('./leapYear');

describe('leapYear', () => {
    it('should return true for 4', () => {
        expect(leapYear(4)).toBe(true);
    });
})
