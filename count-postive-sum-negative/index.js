function bPositivesSumNegatives(input) {
  
  let result = [];
  const p = input.reduce((a, b) => a + (b > 0 ? 1 : 0), 0);
  const n = input.reduce((a, b) => a + (b < 0 ? b : 0), 0);
  result.push(p, n);

  return result;
}

console.log(bPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
console.log(bPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]));