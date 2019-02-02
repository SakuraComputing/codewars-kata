function isNegativeZero(n) {    
    return (n === 0 && !Object.is(n, 0)) ? true : false;
}

console.log(isNegativeZero(-0));
console.log(isNegativeZero(0));
console.log(isNegativeZero(-5));
console.log(isNegativeZero(5));
console.log(isNegativeZero(Number.MIN_VALUE));
console.log(isNegativeZero(Infinity));