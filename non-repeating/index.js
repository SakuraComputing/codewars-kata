function firstNonRepeatingLetter(s) {

    testString = s.toLowerCase();

    testArray = s.split('');

    for (var i = 0; i < testString.length; i++) {
        var c = testString.charAt(i);
        if (testString.indexOf(c) == i && testString.indexOf(c, i + 1) == -1) {
          return testArray[i];
        }
    }
    return '';
    
}

// console.log(firstNonRepeatingLetter('a'));
console.log(firstNonRepeatingLetter('GgTtaa,'));
console.log(firstNonRepeatingLetter('sTress'));
// console.log(firstNonRepeatingLetter('moonmen'));
