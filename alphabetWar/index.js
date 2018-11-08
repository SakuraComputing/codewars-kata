function alphabetWar(fight) {

  inputArray = fight.split('');

  let leftScore = 0;
  let rightScore = 0;
  let ignoreNext = false;

  for (const index in inputArray) {
      if(ignoreNext && inputArray[index] !== '*') {
        inputArray[index] = "";
      }
      if(inputArray[index] === '*') {
          // Remove index before and index after
          if(index > 0) {
            inputArray[index - 1] = "";    
          }
          inputArray[index] = "";
          if(index < inputArray.length) {
            ignoreNext = true;
        }
      } else {
          ignoreNext = false;
      }
  } 
  const contest = inputArray.join('');

  for (let i = 0; i < contest.length; i++) {
        switch(contest[i]) {
            case 'w':
                leftScore += 4;
                break;
            case 'p':
                leftScore += 3;
                break;
            case 'b':
                leftScore += 2;
                break;
            case 's':
                leftScore += 1;
                break;
            case 'm':
                rightScore += 4;
                break;
            case 'q':
                rightScore += 3;
                break;
            case 'd':
                rightScore += 2;
                break;
            case 'z':
                rightScore += 1;
                break;
        }
    }
    if(leftScore > rightScore) {
        return ("Left side wins!") 
    } else if (rightScore > leftScore) {
        return ("Right side wins!")
    } else if (leftScore === rightScore ) {
        return ("Let's fight again!")
    }  
}

console.log(alphabetWar("z*z*z*zs"));
// console.log(alphabetWar("zz*zzs"));
// console.log(alphabetWar("sz**z**zs"));

// function alphabetWar(fight){
//     fight = fight.replace(/[a-z]\*[a-z]|[a-z]\*|\*[a-z]/g,"")
//      var l = 0;
//      var r = 0;
//      fight.split("").forEach(i=>"1sbpw".indexOf(i)>0?l+="1sbpw".indexOf(i):l)
//      fight.split("").forEach(j=>"1zdqm".indexOf(j)>0?r+="1zdqm".indexOf(j):r)
//      if(l==r){return "Let's fight again!"}
//      return l>r ? "Left side wins!" : "Right side wins!";
//  }