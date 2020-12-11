const fizzBuzz = require('./fizzBuzz');

describe('FizzBuzz', () => {
    it('should retur 1 when passed 1', () => {
        expect(fizzBuzz(1)).toBe(1);
    });

    it('should return 2 when passed 2', () => {
        expect(fizzBuzz(2)).toBe(2);
    });

    it('should return fizz when passed 3', () => {
        expect(fizzBuzz(3)).toBe('fizz');
    });

    it('should return buzz when passed 5', () => {
        expect(fizzBuzz(5)).toBe('buzz');
    });
})
