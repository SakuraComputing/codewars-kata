function validate(n) {

  n = n.toString().split('').map(Number).reverse();

  console.log(n);

  return n.reduce(function (sum, digit, index) {
    if (index & 1) {
      digit <<= 1;
    }
    if (digit > 9) digit -= 9;
    return sum + digit;
  }, 0) % 10 == 0;

}

// console.log(validate(1714));
console.log(validate(12345));
// console.log(validate(891));
// console.log(validate(1230));