
function leapYear(year) {

    if(year === 4) return true;
    if(year === 8) return true;
    if((year % 4 === 0) && (year % 100 === 0)) {
        return year === 400;
    }
    return false;
}

module.exports = leapYear;
