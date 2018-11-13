function reverse(str) {

    let wordArray = str.split(' ');
    let newArray = [];
    let element;
    for (let i = 1; i <= wordArray.length; i++) {
        if(i % 2 === 0) {
            element = wordArray[i - 1].split('').reverse().join('');
        } else {
            element = wordArray[i - 1];
        }
        if(element !== "") {
            newArray.push(element);
        }
    }
    return newArray.length > 0 ? newArray.join(' ') : '';
    
}

console.log(reverse("  "));