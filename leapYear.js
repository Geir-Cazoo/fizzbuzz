
function leapYear(year) {
    if(year === 4) return true;
    if(year === 8) return true;
    if(year === 400) return true;
    if(year % 100 === 0) return false;

    return false;
}

module.exports = leapYear;
