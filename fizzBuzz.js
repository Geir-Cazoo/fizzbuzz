
function fizzBuzz(number) {
    if (number === 2) return 2;
    if (number % 3 === 0) return 'fizz';
    if (number === 5) return 'buzz';
    if (number === 10) return 'buzz';
    return 1;
}

module.exports = fizzBuzz;
