const repeatString = function(string, num) {
    if(num < 0)
        return "ERROR";
    let ans = "";
    while(num)
    {
        ans += string;
        num--;
    }
    return ans;
};

// Do not edit below this line
module.exports = repeatString;
