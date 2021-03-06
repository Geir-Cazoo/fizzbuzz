const leapYear = require('./leapYear');

describe('leapYear', () => {

    it('should return false for 2', () => {
        expect(leapYear(2)).toBe(false);
    });

    it('should return true for 4', () => {
        expect(leapYear(4)).toBe(true);
    });

    it('should return false for 5', () => {
        expect(leapYear(5)).toBe(false);
    });

    it('should return true for 8', () => {
        expect(leapYear(8)).toBe(true);
    });

    it('should return false for 100', () => {
        expect(leapYear(100)).toBe(false);
    });

    it('should return false for 200', () => {
        expect(leapYear(200)).toBe(false);
    });

    it('should return false for 300', () => {
        expect(leapYear(300)).toBe(false);
    });

    it('should return true for 400', () => {
        expect(leapYear(400)).toBe(true);
    });
})
