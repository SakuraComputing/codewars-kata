function invert(array) {
    
    console.log(array);
    if(array.length === 0) return array;

    for (let i = 0; i < array.length; i++) {
        if(array[i] > 0) {
            console.log(array[i])
            array[i] = -Math.abs(array[i]);
            console.log('Count'. array[i]);
        }
    }
    return array;
 }

console.log(invert([1,-2,3]));