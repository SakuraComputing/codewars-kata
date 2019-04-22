function comp(array1, array2) {
    
    if(array1 && array1.length === 0 || array2 && array2.length === 0) return false;
    // console.log(array2.sort(function(a, b) {
    //     return console.log('Includes *', a - b)
    // }));
    console.log(array1.sort());
    console.log(array2.sort());
    
    return array1.length === array2.length && array1.sort().every((e, i) => ((e * e) === array2.sort()[i]));


}
// console.log(comp([],[]));
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11],[11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]));
// console.log(comp([121, 25], [11*11, 5*5]));