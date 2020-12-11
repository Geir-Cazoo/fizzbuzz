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

    it('should return fizz when passed 6', () => {
        expect(fizzBuzz(6)).toBe('fizz');
    });

    it('should return fizz when passed 9', () => {
        expect(fizzBuzz(9)).toBe('fizz');
    });

    it('should return buzz when passed 10', () => {
        expect(fizzBuzz(10)).toBe('buzz');
    });

    it('should return 11 when passed 11', () => {
        expect(fizzBuzz(11)).toBe('11');
    });
})
