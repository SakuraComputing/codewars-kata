function createPhoneNumber(numbers){

  let firstPart = "(";
  let secondPart = ") ";
  let thirdPart = "-";

  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if(i < 3) {
      firstPart += numbers[i];
    } else if (i > 2 && i < 6) {
      secondPart += numbers[i];
    } else if (i > 5) {
      thirdPart += numbers[i];
    }
  }
  return firstPart + secondPart + thirdPart;
  
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))