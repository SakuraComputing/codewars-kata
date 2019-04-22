// Sum Numbers
function sum (numbers) {
    "use strict";
    
    // if (numbers === undefined || numbers.length === 0) return 0;

    return numbers.reduce((a,b) => a + b, 0)


};

console.log(sum([]));
console.log(sum([1, 5.2, 4, 0, -1]))