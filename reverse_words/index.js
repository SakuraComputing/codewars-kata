function reverseWords(str) {

    let wordArray = str.split(' ');
    let newArray = [];
    let element;
    for (let i = 1; i <= wordArray.length; i++) {
        element = wordArray[i - 1].split('').reduce((r, c) => c + r , '');
        if(element !== "") {
            newArray.push(element);
        }
    }
    console.log('>', newArray.join(' '), '<')
    return newArray.length > 0 ? newArray.join(' ') : '';
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));
console.log(reverseWords("apple"));
console.log(reverseWords("a b c d"));
console.log(reverseWords('double spaced words'));