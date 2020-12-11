const fizzBuzz = require('./fizzBuzz');

describe('FizzBuzz', () => {
    it('should retur 1 when passed 1', () => {
        expect(fizzBuzz(1)).toBe(1);
    });

    it('should return 2 when passed 2', () => {
        expect(fizzBuzz(2)).toBe(2);
    });
})
