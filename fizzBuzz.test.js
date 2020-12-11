const fizzBuzz = require('./fizzBuzz');

describe.each([
    [3, 'fizz'],
    [6, 'fizz'],
    [9, 'fizz'],
    [5, 'buzz'],
    [10, 'buzz'],
    [20, 'buzz'],
    [15, 'fizzbuzz'],
    [30, 'fizzbuzz'],
    [45, 'fizzbuzz'],
    [2, '2'],
    [7, '7'],
    [22, '22'],
])('FizzBuzz', (number, expected) => {
    it(`should return ${expected} when passed ${number}`, () => {
        expect(fizzBuzz(number)).toBe(expected);
    });
})


