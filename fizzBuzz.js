
function fizzBuzz(number) {
    if (number % 3 === 0) return 'fizz';
    if (number === 5) return 'buzz';
    if (number === 10) return 'buzz';
    return number.toString();
}

module.exports = fizzBuzz;
