function solution(number) {
    let denominations_natural = [1000,900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let denominations_roman = ['M', 'CM', 'D', 'CD','C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  
    let conversions = '';
  
    for (let i=0; i<denominations_natural.length; i++) {
      console.log(i);
      while (number >= denominations_natural[i]) {
        console.log('Iterate', number);
        conversions += denominations_roman[i];
        number -= denominations_natural[i];
      }
    }
    return conversions;
};
console.log(solution(1005));