function parse(str) {

  let result = [];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "i":
        count++;
        break;
      case "d":
        count--;
        break;
      case "s":
        count = Math.pow( count, 2);
        break;
      case "o":
        result.push(count);
        break;
    }  
  }
  return result;
  
}

console.log(parse('iiisdoso'));