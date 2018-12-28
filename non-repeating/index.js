function firstNonRepeatingLetter(s) {

    testString = s.toLowerCase();

    testArray = s.split('');

    console.log(s.toLowerCase());

    for (var i = 0; i < testString.length; i++) {
        var c = testString.charAt(i);
        console.log(c);
        // console.log(s.indexOf(c))
        // console.log(s.toLowerCase().indexOf(c, i + 1))
        if (testString.indexOf(c) == i && testString.indexOf(c, i + 1) == -1) {
          console.log('Array Contents', testArray[i]);
          return testArray[i];
        }
    }
    return '';
    
}

// console.log(firstNonRepeatingLetter('a'));
console.log(firstNonRepeatingLetter('GgTtaa,'));
console.log(firstNonRepeatingLetter('sTress'));
// console.log(firstNonRepeatingLetter('moonmen'));
