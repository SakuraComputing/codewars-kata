function findOutlier(integers) {

    let even = [];
    let odd = [];

    for (let i = 0; i < integers.length; i++) {
        const number = integers[i];
        number % 2 === 0 ? even.push(number) : odd.push(number);
        if(even.length > 0 && odd.length > 0 ) {
            if(even.length > odd.length) {
                return parseInt(odd)
            } else if (odd.length > even.length) {
                return parseInt(even)
            }
        }
    }

}

console.log(findOutlier([0,1,2]));
console.log(findOutlier([1,2,3]));
console.log(findOutlier([2,6,8,10,3]));
console.log(findOutlier([0,0,3,0,0]));
console.log(findOutlier([1,1,0,1,1]));