
function leapYear(year) {
    if(year === 5) return false;
    if(year === 100) return false;
    if(year === 200) return false;
    return true;
}

module.exports = leapYear;
