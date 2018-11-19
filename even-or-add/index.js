function evenOrOdd(str) {

    let oddCount = 0, evenCount = 0;

    for (let i = 0; i < str.length; i++) {
      str[i] % 2 === 0 ? evenCount += parseInt(str[i]) : oddCount += parseInt(str[i]);        
    }
    
    console.log(oddCount, evenCount);

    if(evenCount === oddCount) {
      outcome = 'Even and Odd are the same'
    } else if (oddCount > evenCount) {
      outcome = 'Odd is greater than Even'
    } else {
      outcome = 'Even is greater than Odd'
    }

    return outcome;
  
}

console.log(evenOrOdd('12'));