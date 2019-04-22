function solve(s) {

  const alphabet = ("abcdefghijklmonpqrstuvwxyz").split('');

  // Work out the longest consonant sequence

  console.log(s.split('*','aeiou'));

  // compare which has the highest value and return that value

  // s('aeiou', "*").split("*").map ( a.chars.map ( alphabet.find_index(i) + 1 ).sum ).max
  // console.log(alphabet)

  return 0;
};

console.log(solve('zodiac'))