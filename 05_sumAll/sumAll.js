const sumAll = function(numStart, numEnd) {
    if(typeof numStart != "number" || typeof numEnd != "number")
        return "ERROR"
    else if(numStart < 0 || numEnd < 0)
        return "ERROR"
    let sum = 0;
    let start = Math.min(numStart, numEnd);
    let end = Math.max(numStart, numEnd);
    for(let i = start; i<= end; i++)
        sum += i;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
