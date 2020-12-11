
function fizzBuzz(number) {

    function isDivisableBy(number, x) {
        return number % x === 0;
    }

    if (isDivisableBy(number, 3) && isDivisableBy(number,5)) return 'fizzbuzz';
    if (isDivisableBy(number, 3)) return 'fizz';
    if (isDivisableBy(number, 5)) return 'buzz';
    return number.toString();
}

module.exports = fizzBuzz;
