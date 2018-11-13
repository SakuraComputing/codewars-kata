function getCount(str) {

  let vowelsCount = str.match(/[aeiou]/gi);
  
  return vowelsCount !== null ? vowelsCount.length : 0;

}

console.log(getCount("my pyx"));