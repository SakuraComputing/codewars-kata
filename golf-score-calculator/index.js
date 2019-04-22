const golfScoreCalculator = (parList, scoreList) =>

    [...scoreList].reduce((result, score, index) => result += score - parList[index], 0);

// console.log(golfScoreCalculator('443454444344544443', '353445334534445344'));
console.log(golfScoreCalculator('333', '114'));
