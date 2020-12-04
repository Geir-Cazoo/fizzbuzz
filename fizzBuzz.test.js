const fizzBuzz = require("./fizzBuzz");

describe('fizzBuzz', () => {
    it('should return 1 if it receives 1', () => {
        expect(fizzBuzz(1)).toBe(1)
    })

    it('should return fizz if it receives 3', () => {
        expect(fizzBuzz(3)).toBe('fizz');
    });

    it('should return buzz if it receives 5', () => {
        expect(fizzBuzz(5)).toBe('buzz');
    });

});
