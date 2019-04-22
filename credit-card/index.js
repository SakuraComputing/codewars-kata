function validate(n) {

  const cc = (""+ n).split('');

  let cs = [];

  if(cc.length % 2 !== 0) {
    for (let i = (cc.length - 1); i >= 0; i--) {
      ((i + 1) % 2 !== 0) ? 
        cs.unshift(parseInt(cc[i])) : cc[i] < 9 ? cs.unshift(cc[i] *= 2) 
        : cs.unshift((cc[i] *= 2) - 9);
    }
  } else {
    for (let i = (cc.length - 1); i >= 0; i--) {
      ((i + 1) % 2 !== 0) ?
       (cc[i] < 9) ? cs.unshift(cc[i] *= 2) : cs.unshift((cc[i] *= 2) - 9)
       : cs.unshift(parseInt(cc[i]));
    }
  }
  return cs.reduce((a, b) => a + b, 0) % 10 === 0 ? true : false;
}

console.log(validate(1714));
console.log(validate(12345));
console.log(validate(891));
console.log(validate(1230));