const removeFromArray = function(Array, ...args) {
    for (let i = 0; i < args.length; i++) {
        const index = Array.indexOf(args[i]);
        if (index !== -1) {
            Array.splice(index, 1);
            i--;
        }
    }
    return Array;
};
// Do not edit below this line
module.exports = removeFromArray;
