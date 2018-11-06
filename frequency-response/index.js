function freqSeq(str, sep) {

  let newArray = [];
  let testArray = str.split('');

  for (let i = 0; i < str.length; i++) {
    newArray.push(testArray.reduce(function(p,c) {
      if(c === str.charAt(i)) 
        p++;  
      return p;
    },0));
  }  
  return newArray.join(sep);
}

console.log(freqSeq("hello world", "-"));