var evalLikes = function(words){

  let j = 0;
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if(word.toLowerCase() === 'like' && word.length === 4 ) {
      j++
    }
  }
  console.log((j / words.length) * 100,(((j / words.length) * 100) > 5));
  if((j / words.length) * 100,(((j / words.length) * 100) > 5)) {
    return true;
  } else {
    return false;
  }
  // return ((j++ > 0) && (((j / words.length) * 100) > 5)) ? true : false;
}

// console.log(evalLikes(['today','was','so','like','awesome']));


console.log(evalLikes(["like", "Ilike", "Ilike", "Ilike", "Ilike", "Ilike", "Ilike", "Ilike", "Ilike", "Ilike", "Ilike", "Ilike", "Ilike", "Ilike", "Ilike", "Ilike", "Ilike", "Ilike", "Ilike", "Ilike", "Ilike"]));
