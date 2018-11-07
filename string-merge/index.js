function stringMerge(a, b, c){

    if(a.indexOf(c) === 1) {
        firstWord = a.slice(0, a.indexOf(c) + 1);
    } else {
        firstWord = a.slice(0, a.indexOf(c))
    }

    if(b.indexOf(c) === 1) {
        secondWord = b.slice(b.indexOf(c) + 1, b.length);
    } else {
        secondWord = b.slice(b.indexOf(c), b.length);
    }

    console.log(firstWord, a.indexOf(c));
    console.log(secondWord);

    return firstWord  + secondWord;
}
console.log(stringMerge("person", "here", "e"));
console.log(stringMerge("apowiejfoiajsf","iwahfeijouh", "j"));
console.log(stringMerge("abcdefxxxyzz","abcxxxyyyxyzz", "x"));
console.log(stringMerge("12345654321","123456789", "6"));
console.log(stringMerge("JiOdIdA4","oopopopoodddasdfdfsd", "d"));
console.log(stringMerge("incredible","people", "e"), "increople");
