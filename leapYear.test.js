const leapYear = require('./leapYear');

describe('leapYear', () => {
    it('should return true for 4', () => {
        expect(leapYear(4)).toBe(true);
    });

    it('should return false for 5', () => {
        expect(leapYear(5)).toBe(false);
    });
})
