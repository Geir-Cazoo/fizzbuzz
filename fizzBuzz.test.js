const fizzBuzz = require("./fizzBuzz");

describe('fizzBuzz', () => {
    it('should return 1 if it receives 1', () => {
        expect(fizzBuzz(1)).toBe(1)
    })

    it('should return 7 if it receives 7', () => {
        expect(fizzBuzz(7)).toBe(7)
    })

    it('should return fizz if it receives 3', () => {
        expect(fizzBuzz(3)).toBe('fizz');
    });

    it('should return fizz if it receives 9', () => {
        expect(fizzBuzz(9)).toBe('fizz');
    });

    it('should return buzz if it receives 5', () => {
        expect(fizzBuzz(5)).toBe('buzz');
    });

    it('should return buzz if it receives 10', () => {
        expect(fizzBuzz(10)).toBe('buzz');
    });

    it('should return fizzBuss if it receives 15', () => {
        expect(fizzBuzz(15)).toBe('fizzBuzz');
    });

    it('should return fizzBuzz if it receives 30', () => {
        expect(fizzBuzz(30)).toBe('fizzBuzz');
    });

});

